(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"8rEH":function(t,e,s){"use strict";s.d(e,"p",(function(){return O})),s.d(e,"b",(function(){return _})),s.d(e,"i",(function(){return m})),s.d(e,"e",(function(){return w})),s.d(e,"c",(function(){return g})),s.d(e,"h",(function(){return y})),s.d(e,"d",(function(){return p})),s.d(e,"a",(function(){return R})),s.d(e,"n",(function(){return f})),s.d(e,"k",(function(){return D})),s.d(e,"g",(function(){return C})),s.d(e,"m",(function(){return S})),s.d(e,"j",(function(){return k})),s.d(e,"f",(function(){return b})),s.d(e,"l",(function(){return v})),s.d(e,"o",(function(){return T})),s.d(e,"q",(function(){return x}));var i=s("zQui"),n=s("8bJo"),o=s("KCVW"),r=s("2Vo4"),a=s("XNiG"),c=s("quSY"),h=s("VRyK"),l=s("LRne"),d=s("itXk"),u=s("lJxs");class f extends i.o{constructor(){super(...arguments),this.stickyCssClass="mat-table-sticky"}}class _ extends i.b{}class m extends i.j{}class w extends i.f{}class g extends i.d{}class y extends i.i{constructor(t,e){super(t,e),e.nativeElement.classList.add(`mat-column-${t.cssClassFriendlyName}`)}}class p extends i.e{constructor(t,e){super(t,e),e.nativeElement.classList.add(`mat-column-${t.cssClassFriendlyName}`)}}class R extends i.a{constructor(t,e){super(t,e),e.nativeElement.classList.add(`mat-column-${t.cssClassFriendlyName}`)}}class D extends i.l{}class C extends i.h{}class S extends i.n{}class k extends i.k{}class b extends i.g{}class v extends i.m{}class x extends i.q{}class O{}const E=9007199254740991;class T extends n.b{constructor(t=[]){super(),this._renderData=new r.a([]),this._filter=new r.a(""),this._internalPageChanges=new a.a,this._renderChangesSubscription=c.a.EMPTY,this.sortingDataAccessor=(t,e)=>{const s=t[e];if(Object(o.a)(s)){const t=Number(s);return t<E?t:s}return s},this.sortData=(t,e)=>{const s=e.active,i=e.direction;return s&&""!=i?t.sort((t,e)=>{let n=this.sortingDataAccessor(t,s),o=this.sortingDataAccessor(e,s),r=0;return null!=n&&null!=o?n>o?r=1:n<o&&(r=-1):null!=n?r=1:null!=o&&(r=-1),r*("asc"==i?1:-1)}):t},this.filterPredicate=(t,e)=>{const s=Object.keys(t).reduce((e,s)=>e+t[s]+"\u25ec","").toLowerCase(),i=e.trim().toLowerCase();return-1!=s.indexOf(i)},this._data=new r.a(t),this._updateChangeSubscription()}get data(){return this._data.value}set data(t){this._data.next(t)}get filter(){return this._filter.value}set filter(t){this._filter.next(t)}get sort(){return this._sort}set sort(t){this._sort=t,this._updateChangeSubscription()}get paginator(){return this._paginator}set paginator(t){this._paginator=t,this._updateChangeSubscription()}_updateChangeSubscription(){const t=this._sort?Object(h.a)(this._sort.sortChange,this._sort.initialized):Object(l.a)(null),e=this._paginator?Object(h.a)(this._paginator.page,this._internalPageChanges,this._paginator.initialized):Object(l.a)(null),s=this._data,i=Object(d.a)([s,this._filter]).pipe(Object(u.a)(([t])=>this._filterData(t))),n=Object(d.a)([i,t]).pipe(Object(u.a)(([t])=>this._orderData(t))),o=Object(d.a)([n,e]).pipe(Object(u.a)(([t])=>this._pageData(t)));this._renderChangesSubscription.unsubscribe(),this._renderChangesSubscription=o.subscribe(t=>this._renderData.next(t))}_filterData(t){return this.filteredData=this.filter?t.filter(t=>this.filterPredicate(t,this.filter)):t,this.paginator&&this._updatePaginator(this.filteredData.length),this.filteredData}_orderData(t){return this.sort?this.sortData(t.slice(),this.sort):t}_pageData(t){if(!this.paginator)return t;const e=this.paginator.pageIndex*this.paginator.pageSize;return t.slice(e,e+this.paginator.pageSize)}_updatePaginator(t){Promise.resolve().then(()=>{const e=this.paginator;if(e&&(e.length=t,e.pageIndex>0)){const t=Math.ceil(e.length/e.pageSize)-1||0,s=Math.min(e.pageIndex,t);s!==e.pageIndex&&(e.pageIndex=s,this._internalPageChanges.next())}})}connect(){return this._renderData}disconnect(){}}},zQui:function(t,e,s){"use strict";s.d(e,"r",(function(){return B})),s.d(e,"t",(function(){return P})),s.d(e,"s",(function(){return M})),s.d(e,"o",(function(){return L})),s.d(e,"b",(function(){return u})),s.d(e,"j",(function(){return f})),s.d(e,"f",(function(){return _})),s.d(e,"d",(function(){return g})),s.d(e,"i",(function(){return p})),s.d(e,"e",(function(){return R})),s.d(e,"a",(function(){return D})),s.d(e,"l",(function(){return b})),s.d(e,"h",(function(){return O})),s.d(e,"n",(function(){return E})),s.d(e,"c",(function(){return T})),s.d(e,"k",(function(){return N})),s.d(e,"g",(function(){return j})),s.d(e,"m",(function(){return F})),s.d(e,"p",(function(){return J})),s.d(e,"u",(function(){return z})),s.d(e,"q",(function(){return V}));var i=s("KCVW"),n=s("8Y7J"),o=s("8bJo"),r=s("XNiG"),a=s("2Vo4"),c=s("HDdC"),h=s("LRne"),l=s("1G5W");function d(t){return class extends t{constructor(...t){super(...t),this._sticky=!1,this._hasStickyChanged=!1}get sticky(){return this._sticky}set sticky(t){const e=this._sticky;this._sticky=Object(i.c)(t),this._hasStickyChanged=e!==this._sticky}hasStickyChanged(){const t=this._hasStickyChanged;return this._hasStickyChanged=!1,t}resetStickyChanged(){this._hasStickyChanged=!1}}}class u{constructor(t){this.template=t}}class f{constructor(t){this.template=t}}class _{constructor(t){this.template=t}}class m{}const w=d(m);class g extends w{constructor(){super(...arguments),this._stickyEnd=!1}get name(){return this._name}set name(t){t&&(this._name=t,this.cssClassFriendlyName=t.replace(/[^a-z0-9_-]/gi,"-"))}get stickyEnd(){return this._stickyEnd}set stickyEnd(t){const e=this._stickyEnd;this._stickyEnd=Object(i.c)(t),this._hasStickyChanged=e!==this._stickyEnd}}class y{constructor(t,e){e.nativeElement.classList.add(`cdk-column-${t.cssClassFriendlyName}`)}}class p extends y{constructor(t,e){super(t,e)}}class R extends y{constructor(t,e){super(t,e)}}class D extends y{constructor(t,e){super(t,e)}}class C{constructor(t,e){this.template=t,this._differs=e}ngOnChanges(t){if(!this._columnsDiffer){const e=t.columns&&t.columns.currentValue||[];this._columnsDiffer=this._differs.find(e).create(),this._columnsDiffer.diff(e)}}getColumnsDiff(){return this._columnsDiffer.diff(this.columns)}extractCellTemplate(t){return this instanceof b?t.headerCell.template:this instanceof O?t.footerCell.template:t.cell.template}}class S extends C{}const k=d(S);class b extends k{constructor(t,e){super(t,e)}ngOnChanges(t){super.ngOnChanges(t)}}class v extends C{}const x=d(v);class O extends x{constructor(t,e){super(t,e)}ngOnChanges(t){super.ngOnChanges(t)}}class E extends C{constructor(t,e){super(t,e)}}let T=(()=>{class t{constructor(e){this._viewContainer=e,t.mostRecentCellOutlet=this}ngOnDestroy(){t.mostRecentCellOutlet===this&&(t.mostRecentCellOutlet=null)}}return t.mostRecentCellOutlet=null,t})();class N{}class j{}class F{}const H=["top","bottom","left","right"];class I{constructor(t,e,s,i=!0){this._isNativeHtmlTable=t,this._stickCellCss=e,this.direction=s,this._isBrowser=i}clearStickyPositioning(t,e){for(const s of t)if(s.nodeType===s.ELEMENT_NODE){this._removeStickyStyle(s,e);for(let t=0;t<s.children.length;t++)this._removeStickyStyle(s.children[t],e)}}updateStickyColumns(t,e,s){const i=e.some(t=>t)||s.some(t=>t);if(!t.length||!i||!this._isBrowser)return;const n=t[0],o=n.children.length,r=this._getCellWidths(n),a=this._getStickyStartColumnPositions(r,e),c=this._getStickyEndColumnPositions(r,s),h="rtl"===this.direction;for(const l of t)for(let t=0;t<o;t++){const i=l.children[t];e[t]&&this._addStickyStyle(i,h?"right":"left",a[t]),s[t]&&this._addStickyStyle(i,h?"left":"right",c[t])}}stickRows(t,e,s){if(!this._isBrowser)return;const i="bottom"===s?t.reverse():t;let n=0;for(let o=0;o<i.length;o++){if(!e[o])continue;const t=i[o];if(this._isNativeHtmlTable)for(let e=0;e<t.children.length;e++)this._addStickyStyle(t.children[e],s,n);else this._addStickyStyle(t,s,n);if(o===i.length-1)return;n+=t.getBoundingClientRect().height}}updateStickyFooterContainer(t,e){if(!this._isNativeHtmlTable)return;const s=t.querySelector("tfoot");e.some(t=>!t)?this._removeStickyStyle(s,["bottom"]):this._addStickyStyle(s,"bottom",0)}_removeStickyStyle(t,e){for(const s of e)t.style[s]="";t.style.zIndex=this._getCalculatedZIndex(t),H.some(e=>!!t.style[e])||(t.style.position="",t.classList.remove(this._stickCellCss))}_addStickyStyle(t,e,s){t.classList.add(this._stickCellCss),t.style[e]=`${s}px`,t.style.cssText+="position: -webkit-sticky; position: sticky; ",t.style.zIndex=this._getCalculatedZIndex(t)}_getCalculatedZIndex(t){const e={top:100,bottom:10,left:1,right:1};let s=0;for(const i of H)t.style[i]&&(s+=e[i]);return s?`${s}`:""}_getCellWidths(t){const e=[],s=t.children;for(let i=0;i<s.length;i++)e.push(s[i].getBoundingClientRect().width);return e}_getStickyStartColumnPositions(t,e){const s=[];let i=0;for(let n=0;n<t.length;n++)e[n]&&(s[n]=i,i+=t[n]);return s}_getStickyEndColumnPositions(t,e){const s=[];let i=0;for(let n=t.length;n>0;n--)e[n]&&(s[n]=i,i+=t[n]);return s}}function A(t){return Error(`Could not find column with id "${t}".`)}class B{constructor(t,e){this.viewContainer=t,this.elementRef=e}}class P{constructor(t,e){this.viewContainer=t,this.elementRef=e}}class M{constructor(t,e){this.viewContainer=t,this.elementRef=e}}class L{constructor(t,e,s,i,n,o,c){this._differs=t,this._changeDetectorRef=e,this._elementRef=s,this._dir=n,this._platform=c,this._onDestroy=new r.a,this._columnDefsByName=new Map,this._customColumnDefs=new Set,this._customRowDefs=new Set,this._customHeaderRowDefs=new Set,this._customFooterRowDefs=new Set,this._headerRowDefChanged=!0,this._footerRowDefChanged=!0,this._cachedRenderRowsMap=new Map,this.stickyCssClass="cdk-table-sticky",this._multiTemplateDataRows=!1,this.viewChange=new a.a({start:0,end:Number.MAX_VALUE}),i||this._elementRef.nativeElement.setAttribute("role","grid"),this._document=o,this._isNativeHtmlTable="TABLE"===this._elementRef.nativeElement.nodeName}get trackBy(){return this._trackByFn}set trackBy(t){Object(n.W)()&&null!=t&&"function"!=typeof t&&console&&console.warn&&console.warn(`trackBy must be a function, but received ${JSON.stringify(t)}.`),this._trackByFn=t}get dataSource(){return this._dataSource}set dataSource(t){this._dataSource!==t&&this._switchDataSource(t)}get multiTemplateDataRows(){return this._multiTemplateDataRows}set multiTemplateDataRows(t){this._multiTemplateDataRows=Object(i.c)(t),this._rowOutlet&&this._rowOutlet.viewContainer.length&&this._forceRenderDataRows()}ngOnInit(){this._setupStickyStyler(),this._isNativeHtmlTable&&this._applyNativeTableSections(),this._dataDiffer=this._differs.find([]).create((t,e)=>this.trackBy?this.trackBy(e.dataIndex,e.data):e)}ngAfterContentChecked(){if(this._cacheRowDefs(),this._cacheColumnDefs(),!this._headerRowDefs.length&&!this._footerRowDefs.length&&!this._rowDefs.length)throw Error("Missing definitions for header, footer, and row; cannot determine which columns should be rendered.");this._renderUpdatedColumns(),this._headerRowDefChanged&&(this._forceRenderHeaderRows(),this._headerRowDefChanged=!1),this._footerRowDefChanged&&(this._forceRenderFooterRows(),this._footerRowDefChanged=!1),this.dataSource&&this._rowDefs.length>0&&!this._renderChangeSubscription&&this._observeRenderChanges(),this._checkStickyStates()}ngOnDestroy(){this._rowOutlet.viewContainer.clear(),this._headerRowOutlet.viewContainer.clear(),this._footerRowOutlet.viewContainer.clear(),this._cachedRenderRowsMap.clear(),this._onDestroy.next(),this._onDestroy.complete(),Object(o.e)(this.dataSource)&&this.dataSource.disconnect(this)}renderRows(){this._renderRows=this._getAllRenderRows();const t=this._dataDiffer.diff(this._renderRows);if(!t)return;const e=this._rowOutlet.viewContainer;t.forEachOperation((t,s,i)=>{if(null==t.previousIndex)this._insertRow(t.item,i);else if(null==i)e.remove(s);else{const t=e.get(s);e.move(t,i)}}),this._updateRowIndexContext(),t.forEachIdentityChange(t=>{e.get(t.currentIndex).context.$implicit=t.item.data}),this.updateStickyColumnStyles()}setHeaderRowDef(t){this._customHeaderRowDefs=new Set([t]),this._headerRowDefChanged=!0}setFooterRowDef(t){this._customFooterRowDefs=new Set([t]),this._footerRowDefChanged=!0}addColumnDef(t){this._customColumnDefs.add(t)}removeColumnDef(t){this._customColumnDefs.delete(t)}addRowDef(t){this._customRowDefs.add(t)}removeRowDef(t){this._customRowDefs.delete(t)}addHeaderRowDef(t){this._customHeaderRowDefs.add(t),this._headerRowDefChanged=!0}removeHeaderRowDef(t){this._customHeaderRowDefs.delete(t),this._headerRowDefChanged=!0}addFooterRowDef(t){this._customFooterRowDefs.add(t),this._footerRowDefChanged=!0}removeFooterRowDef(t){this._customFooterRowDefs.delete(t),this._footerRowDefChanged=!0}updateStickyHeaderRowStyles(){const t=this._getRenderedRows(this._headerRowOutlet),e=this._elementRef.nativeElement.querySelector("thead");e&&(e.style.display=t.length?"":"none");const s=this._headerRowDefs.map(t=>t.sticky);this._stickyStyler.clearStickyPositioning(t,["top"]),this._stickyStyler.stickRows(t,s,"top"),this._headerRowDefs.forEach(t=>t.resetStickyChanged())}updateStickyFooterRowStyles(){const t=this._getRenderedRows(this._footerRowOutlet),e=this._elementRef.nativeElement.querySelector("tfoot");e&&(e.style.display=t.length?"":"none");const s=this._footerRowDefs.map(t=>t.sticky);this._stickyStyler.clearStickyPositioning(t,["bottom"]),this._stickyStyler.stickRows(t,s,"bottom"),this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement,s),this._footerRowDefs.forEach(t=>t.resetStickyChanged())}updateStickyColumnStyles(){const t=this._getRenderedRows(this._headerRowOutlet),e=this._getRenderedRows(this._rowOutlet),s=this._getRenderedRows(this._footerRowOutlet);this._stickyStyler.clearStickyPositioning([...t,...e,...s],["left","right"]),t.forEach((t,e)=>{this._addStickyColumnStyles([t],this._headerRowDefs[e])}),this._rowDefs.forEach(t=>{const s=[];for(let i=0;i<e.length;i++)this._renderRows[i].rowDef===t&&s.push(e[i]);this._addStickyColumnStyles(s,t)}),s.forEach((t,e)=>{this._addStickyColumnStyles([t],this._footerRowDefs[e])}),Array.from(this._columnDefsByName.values()).forEach(t=>t.resetStickyChanged())}_getAllRenderRows(){const t=[],e=this._cachedRenderRowsMap;this._cachedRenderRowsMap=new Map;for(let s=0;s<this._data.length;s++){let i=this._data[s];const n=this._getRenderRowsForData(i,s,e.get(i));this._cachedRenderRowsMap.has(i)||this._cachedRenderRowsMap.set(i,new WeakMap);for(let e=0;e<n.length;e++){let s=n[e];const i=this._cachedRenderRowsMap.get(s.data);i.has(s.rowDef)?i.get(s.rowDef).push(s):i.set(s.rowDef,[s]),t.push(s)}}return t}_getRenderRowsForData(t,e,s){return this._getRowDefs(t,e).map(i=>{const n=s&&s.has(i)?s.get(i):[];if(n.length){const t=n.shift();return t.dataIndex=e,t}return{data:t,rowDef:i,dataIndex:e}})}_cacheColumnDefs(){this._columnDefsByName.clear(),$(this._contentColumnDefs,this._customColumnDefs).forEach(t=>{if(this._columnDefsByName.has(t.name))throw function(t){return Error(`Duplicate column definition name provided: "${t}".`)}(t.name);this._columnDefsByName.set(t.name,t)})}_cacheRowDefs(){this._headerRowDefs=$(this._contentHeaderRowDefs,this._customHeaderRowDefs),this._footerRowDefs=$(this._contentFooterRowDefs,this._customFooterRowDefs),this._rowDefs=$(this._contentRowDefs,this._customRowDefs);const t=this._rowDefs.filter(t=>!t.when);if(!this.multiTemplateDataRows&&t.length>1)throw Error("There can only be one default row without a when predicate function.");this._defaultRowDef=t[0]}_renderUpdatedColumns(){const t=(t,e)=>t||!!e.getColumnsDiff();this._rowDefs.reduce(t,!1)&&this._forceRenderDataRows(),this._headerRowDefs.reduce(t,!1)&&this._forceRenderHeaderRows(),this._footerRowDefs.reduce(t,!1)&&this._forceRenderFooterRows()}_switchDataSource(t){this._data=[],Object(o.e)(this.dataSource)&&this.dataSource.disconnect(this),this._renderChangeSubscription&&(this._renderChangeSubscription.unsubscribe(),this._renderChangeSubscription=null),t||(this._dataDiffer&&this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear()),this._dataSource=t}_observeRenderChanges(){if(!this.dataSource)return;let t;if(Object(o.e)(this.dataSource)?t=this.dataSource.connect(this):this.dataSource instanceof c.a?t=this.dataSource:Array.isArray(this.dataSource)&&(t=Object(h.a)(this.dataSource)),void 0===t)throw Error("Provided data source did not match an array, Observable, or DataSource");this._renderChangeSubscription=t.pipe(Object(l.a)(this._onDestroy)).subscribe(t=>{this._data=t||[],this.renderRows()})}_forceRenderHeaderRows(){this._headerRowOutlet.viewContainer.length>0&&this._headerRowOutlet.viewContainer.clear(),this._headerRowDefs.forEach((t,e)=>this._renderRow(this._headerRowOutlet,t,e)),this.updateStickyHeaderRowStyles(),this.updateStickyColumnStyles()}_forceRenderFooterRows(){this._footerRowOutlet.viewContainer.length>0&&this._footerRowOutlet.viewContainer.clear(),this._footerRowDefs.forEach((t,e)=>this._renderRow(this._footerRowOutlet,t,e)),this.updateStickyFooterRowStyles(),this.updateStickyColumnStyles()}_addStickyColumnStyles(t,e){const s=Array.from(e.columns||[]).map(t=>{const e=this._columnDefsByName.get(t);if(!e)throw A(t);return e}),i=s.map(t=>t.sticky),n=s.map(t=>t.stickyEnd);this._stickyStyler.updateStickyColumns(t,i,n)}_getRenderedRows(t){const e=[];for(let s=0;s<t.viewContainer.length;s++){const i=t.viewContainer.get(s);e.push(i.rootNodes[0])}return e}_getRowDefs(t,e){if(1==this._rowDefs.length)return[this._rowDefs[0]];let s=[];if(this.multiTemplateDataRows)s=this._rowDefs.filter(s=>!s.when||s.when(e,t));else{let i=this._rowDefs.find(s=>s.when&&s.when(e,t))||this._defaultRowDef;i&&s.push(i)}if(!s.length)throw function(t){return Error("Could not find a matching row definition for the"+`provided row data: ${JSON.stringify(t)}`)}(t);return s}_insertRow(t,e){this._renderRow(this._rowOutlet,t.rowDef,e,{$implicit:t.data})}_renderRow(t,e,s,i={}){t.viewContainer.createEmbeddedView(e.template,i,s);for(let n of this._getCellTemplates(e))T.mostRecentCellOutlet&&T.mostRecentCellOutlet._viewContainer.createEmbeddedView(n,i);this._changeDetectorRef.markForCheck()}_updateRowIndexContext(){const t=this._rowOutlet.viewContainer;for(let e=0,s=t.length;e<s;e++){const i=t.get(e).context;i.count=s,i.first=0===e,i.last=e===s-1,i.even=e%2==0,i.odd=!i.even,this.multiTemplateDataRows?(i.dataIndex=this._renderRows[e].dataIndex,i.renderIndex=e):i.index=this._renderRows[e].dataIndex}}_getCellTemplates(t){return t&&t.columns?Array.from(t.columns,e=>{const s=this._columnDefsByName.get(e);if(!s)throw A(e);return t.extractCellTemplate(s)}):[]}_applyNativeTableSections(){const t=this._document.createDocumentFragment(),e=[{tag:"thead",outlet:this._headerRowOutlet},{tag:"tbody",outlet:this._rowOutlet},{tag:"tfoot",outlet:this._footerRowOutlet}];for(const s of e){const e=this._document.createElement(s.tag);e.setAttribute("role","rowgroup"),e.appendChild(s.outlet.elementRef.nativeElement),t.appendChild(e)}this._elementRef.nativeElement.appendChild(t)}_forceRenderDataRows(){this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear(),this.renderRows(),this.updateStickyColumnStyles()}_checkStickyStates(){const t=(t,e)=>t||e.hasStickyChanged();this._headerRowDefs.reduce(t,!1)&&this.updateStickyHeaderRowStyles(),this._footerRowDefs.reduce(t,!1)&&this.updateStickyFooterRowStyles(),Array.from(this._columnDefsByName.values()).reduce(t,!1)&&this.updateStickyColumnStyles()}_setupStickyStyler(){this._stickyStyler=new I(this._isNativeHtmlTable,this.stickyCssClass,this._dir?this._dir.value:"ltr",this._platform.isBrowser),(this._dir?this._dir.change:Object(h.a)()).pipe(Object(l.a)(this._onDestroy)).subscribe(t=>{this._stickyStyler.direction=t,this.updateStickyColumnStyles()})}}function $(t,e){return t.toArray().concat(Array.from(e))}const z=new n.p("text-column-options");class V{constructor(t,e){this._table=t,this._options=e,this.justify="start",this._options=e||{}}get name(){return this._name}set name(t){this._name=t,this._syncColumnDefName()}ngOnInit(){if(this._syncColumnDefName(),void 0===this.headerText&&(this.headerText=this._createDefaultHeaderText()),this.dataAccessor||(this.dataAccessor=this._options.defaultDataAccessor||((t,e)=>t[e])),!this._table)throw Error("Text column could not find a parent table for registration.");this.columnDef.cell=this.cell,this.columnDef.headerCell=this.headerCell,this._table.addColumnDef(this.columnDef)}ngOnDestroy(){this._table&&this._table.removeColumnDef(this.columnDef)}_createDefaultHeaderText(){const t=this.name;if(Object(n.W)()&&!t)throw Error("Table text column must have a name.");return this._options&&this._options.defaultHeaderTextTransform?this._options.defaultHeaderTextTransform(t):t[0].toUpperCase()+t.slice(1)}_syncColumnDefName(){this.columnDef&&(this.columnDef.name=this.name)}}class J{}}}]);