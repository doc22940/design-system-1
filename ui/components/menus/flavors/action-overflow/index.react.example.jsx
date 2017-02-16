// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { ButtonIcon } from 'ui/components/button-icons/flavors/base/index.react.example';
import { Trigger } from 'ui/components/menus/flavors/dropdown/index.react.example';
import { Menu } from 'ui/components/menus/flavors/dropdown/index.react.example';
import { MenuList } from 'ui/components/menus/flavors/dropdown/index.react.example';
import { MenuItem } from 'ui/components/menus/flavors/dropdown/index.react.example';

///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

const moreIcon = (
  <ButtonIcon className="slds-button--icon-border-filled slds-button--icon-x-small" sprite="utility" symbol="down" assistiveText="Show More" aria-haspopup="true" title="Show More" />
);

//////////////////////////////////////////////
// Export
//////////////////////////////////////////////

export default (
<div className="demo-only" style={{height: '165px'}}>
  <Trigger className="slds-is-open" triggerIcon={moreIcon}>
    <Menu className="slds-dropdown--left slds-dropdown--actions">
      <MenuList>
        <MenuItem tabIndex="0">Action One</MenuItem>
        <MenuItem>Action Two</MenuItem>
        <MenuItem>Action Three</MenuItem>
      </MenuList>
    </Menu>
  </Trigger>
</div>
);
