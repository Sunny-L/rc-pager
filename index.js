var pager = require('./src/rc-pager');

React.renderComponent( <Pager pages={18} current={1} onChange={this.pageChange} pageSize={10}/>,document.getElementById('p1'));
