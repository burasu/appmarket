angular.module("blog.templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("views/appInfo.html","<img class=\"icon\" ng-src=\"{{ info.icon }}\" />\n<h2 class=\"title\">{{ info.title }}</h2>\n<p class=\"developer\">{{ info.developer }}</p>\n<p class=\"price\">{{ info.price | currency }}</p>\n");
$templateCache.put("views/installApp.html","<button class=\"btn btn-active\" ng-click=\"download()\">\n    {{ buttonText }}\n</button>\n");}]);