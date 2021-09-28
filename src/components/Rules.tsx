import React from 'react';
import './Rules.css';
import { Character } from '../static/characters';
import rules, { evalRule, isRuleGroup, Rule, RuleGroup } from '../static/rules';

export interface RulesProps {
  selection: Character[];
}

const Rules = (props: RulesProps) => {
  const renderRule = (ruleOrGroup: Rule | RuleGroup, index: number) => {
    const passed = evalRule(ruleOrGroup, props.selection);

    if (isRuleGroup(ruleOrGroup)) {
      const innerRules = ruleOrGroup.rules.map((rule, i) => renderRule(rule, i));

      return (
        <li key={index} className={'rule ' + (passed ? 'passed' : 'failed')}>
          {ruleOrGroup.name}
          <ul className="rule-group">
            { innerRules }
          </ul>
        </li>
      );
    } else {
      return (
        <li key={index} className={'rule ' + (passed ? 'passed' : 'failed')}>
          {ruleOrGroup.name}
        </li>
      );
    }
  };

  return (
    <ul className="rules">
      { rules.map((rule, i) => renderRule(rule, i)) }
    </ul>
  );
};

export default Rules;