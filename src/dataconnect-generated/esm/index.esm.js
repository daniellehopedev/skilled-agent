import { queryRef, executeQuery, validateArgs } from 'firebase/data-connect';

export const connectorConfig = {
  connector: 'example',
  service: 'skilledagent-31537-service',
  location: 'us-east4'
};

export const getSkillsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetSkills', inputVars);
}
getSkillsRef.operationName = 'GetSkills';

export function getSkills(dcOrVars, vars) {
  return executeQuery(getSkillsRef(dcOrVars, vars));
}

