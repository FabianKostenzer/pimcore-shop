pimcore.registerNS("pimcore.plugin.WebsiteBundle");

pimcore.plugin.WebsiteBundle = Class.create(pimcore.plugin.admin, {
    getClassName: function () {
        return "pimcore.plugin.WebsiteBundle";
    },

    initialize: function () {
        pimcore.plugin.broker.registerPlugin(this);
    },

    pimcoreReady: function (params, broker) {
        // alert("WebsiteBundle ready!");
    }
});

var WebsiteBundlePlugin = new pimcore.plugin.WebsiteBundle();
