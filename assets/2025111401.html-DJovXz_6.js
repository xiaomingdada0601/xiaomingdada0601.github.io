import{_ as t,c as d,b as a,a as p,d as e,e as i,w as l,r,o as c}from"./app-j27O4WR6.js";const v={};function u(o,n){const s=r("RouteLink");return c(),d("div",null,[a("p",null,[n[1]||(n[1]=e("上一篇：",-1)),i(s,{to:"/blogs/designpattern/20251106/2025110601.html"},{default:l(()=>[...n[0]||(n[0]=[e("《【设计模式的基石：面向对象设计原则（SOLID）》",-1)])]),_:1})]),n[4]||(n[4]=p(`<h2 id="什么是-uml-类图" tabindex="-1"><a class="header-anchor" href="#什么是-uml-类图"><span>什么是 UML 类图？</span></a></h2><p>UML 类图 是软件工程的蓝图，它用图形化的方式描述一个系统中类（Class）的静态结构。包括类的内部特征（属性和方法），以及类与类之间的关系。</p><h3 id="_1-类-class" tabindex="-1"><a class="header-anchor" href="#_1-类-class"><span>1. 类（Class）</span></a></h3><p>类是对象的模板，它描述了一类对象共有的属性（数据）和方法（行为）。</p><p>图示：一个三层矩形框</p><ul><li><p>顶层：类名</p></li><li><p>中层：属性（成员变量）</p></li><li><p>底层：方法（成员函数）</p></li></ul><ul><li>表示 public（公开）</li></ul><ul><li>表示 private（私有）</li></ul><h1 id="表示-protected-受保护" tabindex="-1"><a class="header-anchor" href="#表示-protected-受保护"><span>表示 protected（受保护）</span></a></h1><p>【示例】</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">┌─────────────────┐</span>
<span class="line">│      Student    │  &lt;-- 类名</span>
<span class="line">├─────────────────┤</span>
<span class="line">│ - name: String  │  &lt;-- 私有属性</span>
<span class="line">│ - age: int      │</span>
<span class="line">├─────────────────┤</span>
<span class="line">│ + study(): void │  &lt;-- 公开方法</span>
<span class="line">│ + getName(): String│</span>
<span class="line">└─────────────────┘</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-接口-interface" tabindex="-1"><a class="header-anchor" href="#_2-接口-interface"><span>2. 接口（Interface）</span></a></h3><p>接口是一种特殊的类，它只包含抽象方法（在 Java 8+ 后可以有默认方法），表示一个“契约”或“能力”。实现接口的类必须实现接口中所有的方法。</p><p>图示：与类类似，但顶端有 interface 标识</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&lt;&lt;interface&gt;&gt;</span>
<span class="line">┌─────────────────┐</span>
<span class="line">│ Flyable         │</span>
<span class="line">├─────────────────┤</span>
<span class="line">│ + fly(): void   │ &lt;-- 只有方法声明，没有实现--&gt;</span>
<span class="line">└─────────────────┘</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="核心关系-relationships" tabindex="-1"><a class="header-anchor" href="#核心关系-relationships"><span>核心关系（Relationships）</span></a></h2><p>这是类图的灵魂！关系用带有不同箭头的线来表示。</p><h3 id="_1-继承-泛化-inheritance-generalization" tabindex="-1"><a class="header-anchor" href="#_1-继承-泛化-inheritance-generalization"><span>1. 继承/泛化（Inheritance/Generalization）</span></a></h3><p>描述： “is-a” 关系。子类继承父类的特征和行为。 箭头： 空心三角形箭头，从子类指向父类。 记忆： “子承父业”，儿子指向爸爸。</p><p>【示例】 Dog 和 Cat 都继承自 Animal。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">    ┌───────────┐</span>
<span class="line">    │  Animal   │</span>
<span class="line">    └─────△─────┘</span>
<span class="line">          │</span>
<span class="line">    ┌─────┴─────┐</span>
<span class="line">    │           │</span>
<span class="line">┌───┴───┐   ┌───┴───┐</span>
<span class="line">│  Dog  │   │  Cat  │</span>
<span class="line">└───────┘   └───────┘</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-实现-实现-realization" tabindex="-1"><a class="header-anchor" href="#_2-实现-实现-realization"><span>2. 实现/实现（Realization）</span></a></h3><p>描述： 类实现接口的功能。 箭头： 空心三角形箭头的虚线，从类指向接口。 记忆： “实现诺言”，用虚线表示。</p><p>【示例】 Bird 和 Airplane 都实现了 Flyable 接口。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">    &lt;&lt;interface&gt;&gt; </span>
<span class="line">    ┌───────────┐</span>
<span class="line">    │  Flyable  │</span>
<span class="line">    └─────△─────┘</span>
<span class="line">          ╲ (虚线)</span>
<span class="line">          ╲</span>
<span class="line">    ┌──────╲────┐</span>
<span class="line">    │    Bird   │</span>
<span class="line">    └───────────┘</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-组合-composition" tabindex="-1"><a class="header-anchor" href="#_3-组合-composition"><span>3. 组合（Composition）</span></a></h3><p>描述： 强“拥有”关系，部分不能脱离整体而独立存在。同生共死。 箭头： 实心菱形箭头，从整体指向部分。 记忆： “心脏是身体的一部分”，没有身体，心脏就无法独立存在。</p><p>【示例】 Company 和 Department。公司倒闭了，部门也就不复存在了。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">┌───────────┐      ┌──────────────┐</span>
<span class="line">│  Company  │◆----&gt;│ Department   │</span>
<span class="line">└───────────┘      └──────────────┘</span>
<span class="line">    (整体)             (部分)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-聚合-aggregation" tabindex="-1"><a class="header-anchor" href="#_4-聚合-aggregation"><span>4. 聚合（Aggregation）</span></a></h3><p>描述： 弱“拥有”关系，部分可以独立于整体而存在。是一种“包含”关系。 箭头： 空心菱形箭头，从整体指向部分。 记忆： “学生是班级的一员”，班级解散了，学生依然存在。</p><p>【示例】 Teacher 和 Student。老师离开学校，学生还在。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">┌───────────┐      ┌──────────────┐</span>
<span class="line">│  Teacher  │◇----&gt;│   Student    │</span>
<span class="line">└───────────┘      └──────────────┘</span>
<span class="line">    (整体)             (部分)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-依赖-dependency" tabindex="-1"><a class="header-anchor" href="#_5-依赖-dependency"><span>5. 依赖（Dependency）</span></a></h3><p>描述： 最弱的使用关系，一个类的变化会影响另一个类。通常是方法参数、局部变量、静态方法调用等临时性关系。 箭头： 普通虚线箭头，从使用者指向被依赖者。 记忆： “我用了一下你”，用完就丢，关系不紧密。</p><p>【示例】 Person 依赖 Bus（乘坐公交车）。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">┌───────────┐      ┌──────────────┐</span>
<span class="line">│  Person   │-----&gt;│     Bus      │</span>
<span class="line">└───────────┘      └──────────────┘</span>
<span class="line">   (依赖方)           (被依赖方)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>快速总结与记忆口诀 关系 箭头 描述 记忆口诀 继承 实线 + 空心三角 is-a，强关系 “子承父业” 实现 虚线 + 空心三角 实现接口 “实现诺言” 组合 实线 + 实心菱形 强拥有，同生共死 “心脏与身体” 聚合 实线 + 空心菱形 弱拥有，可独立 “学生与班级” 依赖 虚线 + 普通箭头 临时使用，最弱 “我用了一下” 强度排序： 继承 ≈ 实现 &gt; 组合 &gt; 聚合 &gt; 依赖</p><p>一个综合例子 想象一个简单的场景：</p><p>Person（人）是一个抽象类。</p><p>Student（学生）继承自 Person。</p><p>Student 实现了 Studyable（可学习的）接口。</p><p>Student 拥有一个 Book（书）（组合关系，书随学生丢弃而销毁）。</p><p>Student 属于一个 Class（班级）（聚合关系，班级解散学生还在）。</p><p>Student 使用一个 Pen（笔）来写作业（依赖关系，只是临时用一下）。</p><p>用类图表示：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&lt;&lt;interface&gt;&gt;</span>
<span class="line">┌───────────┐       ┌───────────┐       ┌──────┐</span>
<span class="line">│ Studyable │       │   Class   │       │  Pen │</span>
<span class="line">└─────△─────┘       └─────△─────┘       └──△───┘</span>
<span class="line">      │                   │                ╲ (虚线)</span>
<span class="line">      │ (实现)            │ (聚合)          ╲</span>
<span class="line">      │ (虚线)            │ (空心菱形)       ╲</span>
<span class="line">    ┌─┴───────────────────┴─┐             ╲</span>
<span class="line">    │       Student         │◄-------------╯ (依赖)</span>
<span class="line">    ├───────────────────────┤</span>
<span class="line">    │ - grade: int          │◆─────┐ (组合)</span>
<span class="line">    └───────────────────────┘      │ (实心菱形)</span>
<span class="line">          △                       │</span>
<span class="line">          │ (继承)                 ▼</span>
<span class="line">    ┌─────┴─────┐            ┌─────────┐</span>
<span class="line">    │   Person  │            │   Book  │</span>
<span class="line">    └───────────┘            └─────────┘</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>`,48)),a("p",null,[n[3]||(n[3]=e("下一篇：",-1)),i(s,{to:"/blogs/designpattern/20251114/2025111402.html"},{default:l(()=>[...n[2]||(n[2]=[e("单例模式深度解析：从入门到Spring实战",-1)])]),_:1})])])}const b=t(v,[["render",u]]),h=JSON.parse('{"path":"/blogs/designpattern/20251114/2025111401.html","title":"UML类图快速入门-懂类、接口、继承、实现、组合、聚合、依赖","lang":"en-US","frontmatter":{"title":"UML类图快速入门-懂类、接口、继承、实现、组合、聚合、依赖","date":"2025-11-14T13:00:00.000Z","tags":["设计模式"],"categories":["设计模式"],"sticky":1},"headers":[{"level":2,"title":"什么是 UML 类图？","slug":"什么是-uml-类图","link":"#什么是-uml-类图","children":[{"level":3,"title":"1. 类（Class）","slug":"_1-类-class","link":"#_1-类-class","children":[]},{"level":3,"title":"2. 接口（Interface）","slug":"_2-接口-interface","link":"#_2-接口-interface","children":[]}]},{"level":2,"title":"核心关系（Relationships）","slug":"核心关系-relationships","link":"#核心关系-relationships","children":[{"level":3,"title":"1. 继承/泛化（Inheritance/Generalization）","slug":"_1-继承-泛化-inheritance-generalization","link":"#_1-继承-泛化-inheritance-generalization","children":[]},{"level":3,"title":"2. 实现/实现（Realization）","slug":"_2-实现-实现-realization","link":"#_2-实现-实现-realization","children":[]},{"level":3,"title":"3. 组合（Composition）","slug":"_3-组合-composition","link":"#_3-组合-composition","children":[]},{"level":3,"title":"4. 聚合（Aggregation）","slug":"_4-聚合-aggregation","link":"#_4-聚合-aggregation","children":[]},{"level":3,"title":"5. 依赖（Dependency）","slug":"_5-依赖-dependency","link":"#_5-依赖-dependency","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"filePathRelative":"blogs/designpattern/20251114/2025111401.md"}');export{b as comp,h as data};
