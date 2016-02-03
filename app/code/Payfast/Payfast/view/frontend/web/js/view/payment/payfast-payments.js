/*browser:true*/
/*global define*/
define(
    [
        'uiComponent',
        'Magento_Checkout/js/model/payment/renderer-list'
    ],
    function (Component,
              rendererList
    ) {
        'use strict';

        rendererList.push(
            {
                type: 'payfast',
                component: 'Payfast_Payfast/js/view/payment/method-renderer/payfast-method'
            }
        );
        /** Add view logic here if needed */
        return Component.extend({});
    }
);