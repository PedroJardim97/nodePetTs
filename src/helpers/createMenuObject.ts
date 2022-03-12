type MenuOptions = '' | 'all' | 'dogs' | 'cats' | 'fish';
export const createMenuObject = (activeMenu: MenuOptions) => {

    let returnObjetct = {
        all: false,
        dogs: false,
        cats: false,
        fish: false
    }

    if(activeMenu !== '') {
        returnObjetct[activeMenu] = true
    }

    return returnObjetct
}
