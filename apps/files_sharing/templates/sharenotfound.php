<?php
/**
 * SPDX-FileCopyrightText: 2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-only
 */

use OCP\IURLGenerator;
use OCP\Server;

$urlGenerator = Server::get(IURLGenerator::class);
?>
<div class="body-login-container update">
	<div class="icon-big icon-share"></div>
	<h2><?php p($l->t('Share not found')); ?></h2>
	<p class="infogroup"><?php p($_['message'] ?: $l->t('This share does not exist or is no longer available')); ?></p>
	<p><a class="button primary" href="<?php p($urlGenerator->linkTo('', 'index.php')) ?>">
		<?php p($l->t('Back to %s', [$theme->getName()])); ?>
	</a></p>
</div>
