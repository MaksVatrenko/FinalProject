import React from 'react';

import { SidebarWrapper, SidebarList } from './styled';

const Sidebar = () => (
	<SidebarWrapper>
		<SidebarList>
			<li>
				<a href="/">Home</a>
			</li>
		</SidebarList>
	</SidebarWrapper>
);

export default Sidebar;
