/**
 * External dependencies
 */
import React, { PropTypes } from 'react';

/**
 * Internal dependencies
 */
import Notice from 'components/notice';
import NoticeAction from 'components/notice/notice-action';
import { localize } from 'i18n-calypso';

const AwaitingPurchaseNotice = props => {
	return (
		<Notice
			status="is-warning"
			showDismiss={ false }
			text={ props.translate(
				"It looks like you've started a Guided Transfer. " +
				"We just need your payment to confirm the transfer and " +
				"then we'll get started!" ) }
		>
			<NoticeAction href={ `/settings/export/guided/${ props.siteSlug }` }>
				{ props.translate( 'Continue' ) }
			</NoticeAction>
		</Notice>
	);
};

export default localize( AwaitingPurchaseNotice );