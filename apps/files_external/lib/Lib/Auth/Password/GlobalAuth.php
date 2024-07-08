<?php
/**
 * SPDX-FileCopyrightText: 2016-2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-FileCopyrightText: 2015 ownCloud, Inc.
 * SPDX-License-Identifier: AGPL-3.0-only
 */
namespace OCA\Files_External\Lib\Auth\Password;

use OCA\Files_External\Lib\Auth\AuthMechanism;
use OCA\Files_External\Lib\InsufficientDataForMeaningfulAnswerException;
use OCA\Files_External\Lib\StorageConfig;
use OCA\Files_External\Service\BackendService;
use OCP\IL10N;
use OCP\IUser;
use OCP\Security\ICredentialsManager;

/**
 * Global Username and Password
 */
class GlobalAuth extends AuthMechanism {
	public const CREDENTIALS_IDENTIFIER = 'password::global';

	/** @var ICredentialsManager */
	protected $credentialsManager;

	public function __construct(IL10N $l, ICredentialsManager $credentialsManager) {
		$this->credentialsManager = $credentialsManager;

		$this
			->setIdentifier('password::global')
			->setVisibility(BackendService::VISIBILITY_DEFAULT)
			->setScheme(self::SCHEME_PASSWORD)
			->setText($l->t('Global credentials'));
	}

	public function getAuth($uid) {
		$auth = $this->credentialsManager->retrieve($uid, self::CREDENTIALS_IDENTIFIER);
		if (!is_array($auth)) {
			return [
				'user' => '',
				'password' => ''
			];
		} else {
			return $auth;
		}
	}

	public function saveAuth($uid, $user, $password) {
		$this->credentialsManager->store($uid, self::CREDENTIALS_IDENTIFIER, [
			'user' => $user,
			'password' => $password
		]);
	}

	/**
	 * @return void
	 */
	public function manipulateStorageConfig(StorageConfig &$storage, ?IUser $user = null) {
		if ($storage->getType() === StorageConfig::MOUNT_TYPE_ADMIN) {
			$uid = '';
		} elseif (is_null($user)) {
			throw new InsufficientDataForMeaningfulAnswerException('No credentials saved');
		} else {
			$uid = $user->getUID();
		}
		$credentials = $this->credentialsManager->retrieve($uid, self::CREDENTIALS_IDENTIFIER);

		if (is_array($credentials)) {
			$storage->setBackendOption('user', $credentials['user']);
			$storage->setBackendOption('password', $credentials['password']);
		}
	}
}
