define(['global'],function(g){
	
	    /**
     * Http操作相关
     */
    return  {
        /**
         * 获取HttpRequest对象,若创建失败，则返回null
         * @returns {XMLHttpRequest|ActiveXObject|Null}
         */
        GetHttpRequestObject: function () {
            var xmlhttp = null;
            if (window.ActiveXObject) {
                xmlhttp = new window.ActiveXObject("Msxml2.XMLHTTP") || new window.ActiveXObject("Microsoft.XMLHTTP");
            }
            if (!xmlhttp && window.XMLHttpRequest) {
                xmlhttp = new window.XMLHttpRequest();
            }
            if (!xmlhttp && window.createRequest) {
                xmlhttp = window.createRequest();
            }
            return xmlhttp || null;
        }
    };
	
});