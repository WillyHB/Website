var _Cycleable_ = (function () {
    var attachments = {};
    var NUM_ITERATIONS_BEFORE_REMOVAL = 3;
    var newElem = function (_a) {
        var type = _a.type, className = _a.className, text = _a.text;
        var element = document.createElement(type);
        element.classList.add(className);
        element.innerHTML = text;
        return element;
    };
    return function (_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.attachTo, attachTo = _c === void 0 ? '.cycleable' : _c, _d = _b.itemsAttr, itemsAttr = _d === void 0 ? 'js-items' : _d, _e = _b.timeoutAttr, timeoutAttr = _e === void 0 ? 'js-timeout' : _e, _f = _b.delayAttr, delayAttr = _f === void 0 ? 'js-delay' : _f, _g = _b.inClass, inClass = _g === void 0 ? 'in' : _g, _h = _b.outClass, outClass = _h === void 0 ? 'out' : _h;
        if (attachments[attachTo])
            return; // too clingy
        attachments[attachTo] = true;
        document.querySelectorAll(attachTo).forEach(function (el) {
            var items = el.getAttribute(itemsAttr).split(',');
            var timeout, initialDelay;
            try {
                timeout = parseInt(el.getAttribute(timeoutAttr));
            }
            catch (e) {
                timeout = 2000;
            }
            try {
                initialDelay = parseInt(el.getAttribute(delayAttr));
            }
            catch (e) {
                initialDelay = 0;
            }
            var idx = 0, its = 0, shouldRemove = false;
            el.appendChild(newElem({ type: 'span', text: items[idx] }));
            setTimeout(function () {
                setInterval(function () {
                    if (++idx >= items.length)
                        idx = 0;
                    el.firstChild.classList.remove(inClass);
                    el.firstChild.classList.add(outClass);
                    el.insertBefore(newElem({ type: 'span', className: inClass, text: items[idx] }), el.firstChild);
                    el.style.width = window.getComputedStyle(el.firstChild).width;
                    if (!shouldRemove && ++its >= NUM_ITERATIONS_BEFORE_REMOVAL)
                        shouldRemove = true;
                    if (shouldRemove)
                        el.removeChild(el.lastChild);
                }, timeout);
            }, initialDelay);
        });
    };
})();
