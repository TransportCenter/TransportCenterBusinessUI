// Copyright (c) Microsoft. All rights reserved.

import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { RuleViewer } from './ruleViewer';
import { getDeviceGroups } from 'store/reducers/appReducer';

// Pass the devices status
const mapStateToProps = state => ({
  deviceGroups: getDeviceGroups(state)
});

export const RuleViewerContainer = translate()(connect(mapStateToProps, null)(RuleViewer));
