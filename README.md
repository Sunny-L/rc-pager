# rc-pager
react分页组件

## Usage

    var Pager  = require('./index');
    React.renderComponent( <Pager pages={18} current={1} onChange={this.pageChange} pageSize={10}/>,document.getElementById('p1'));


----

## API

pages `Number`  总页数

pages `Number`  当前页

onChange `Function`  页码点击时的事件

pageSize `Number`  每页显示数量
