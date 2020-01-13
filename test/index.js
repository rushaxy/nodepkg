
/*
    包的入口文件

    package enter files as example 
*/
var index = require('../lib/index');
// const index = require('index')
index.hello();



/**
 * art-template is simple use kinds of methods .
 * [template description] art模板测试
 * @type {[type]}
 */
var template = require('art-template');

var html  = template(__dirname + '/../view/art/tpl-user.art',
			{
				user:{name:'张三'}
			});

console.log(html);


/*
compile
 */
// let tpl2 = '<ul>{{each list value index }} <li>{{value}} </li> {{/each}}</ul>';
let tpl2 = 
		`<ul>
			{{each list}}
				<li>{{$index}}--{{$value}}</li>
			{{/each}}

		</ul>`;

let render = template.compile(tpl2);
// console.info(render.toString());
let ret = render({
			list:['apple','orange','banana']
		});
console.info(ret);



/*
	render 
 */
let tpl3 = '<ul>{{each list value index }} <li>{{value}} </li> {{/each}}</ul>';

let ren = template.render(tpl3,{
	list:['yellow','blue','cyan','green']
});

console.info(ren);