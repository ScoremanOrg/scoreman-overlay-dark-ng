
export const ChildFnComponent = ({ defaultRender, children, fnArgs }) => {

    function innerDefaultRender() {
        if (!children) {
            return defaultRender();
        }

        return null;
    }

    function childrenFnRender() {
        if (children) {
            if (typeof children === 'function') {
                const args = Array.isArray(fnArgs) ? fnArgs : [fnArgs];

                return children.call(this, ...args);
            } else {
                return children;
            }
        }
        return null;
    }

    return childrenFnRender() ||
        innerDefaultRender() || null;
}