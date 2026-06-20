const { queryRef, executeQuery, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'example',
  service: 'skilledagent-31537-service',
  location: 'us-east4'
};
exports.connectorConfig = connectorConfig;

const getSkillsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetSkills', inputVars);
}
getSkillsRef.operationName = 'GetSkills';
exports.getSkillsRef = getSkillsRef;

exports.getSkills = function getSkills(dcOrVars, vars) {
  return executeQuery(getSkillsRef(dcOrVars, vars));
};
