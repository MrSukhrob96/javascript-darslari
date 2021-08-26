class CheckObjectProperty {

    taskInfo() {
        /**
         * 1.
         * Object propertisi (key: value) bor yoki yo'qligini tekshiruvchi funksiya 
         * yozing (isEmpty())
         * agar propertylari bo'lsa false qaytarsin aks holda true  
         * Masalan:
         * isEmpty({ name: "John" }) => false
         * isEmpty({}) => true
         * 
         **/
    }


    usingFuncHasOwnProperty(object) {
        for (let item in object) {
            if (object.hasOwnProperty(item)) {
                return false;
            }
        }
        return true;
    }

    usingObjectKeys(object) {
        if (Object.keys(object).length > 0) {
            return false;
        }

        return true
    }

    usingJsonStringify(object) {
        return JSON.stringify(object) === "{}";
    }

}

class CalcObjectPropertiesValue {
    taskInfo() {
        /**
         * 2.
         * Object qiymatlarini numberda yoki string orqali kiritilgan bo'lsa 
         *  ("2", "7") numberga o'girib barchasini yig'indisini hisoblaydigan 
         * funksiya yozing.
         * Masalan:
         * totalValue({a: "1", b: 100}) => 101
         * totalValue({a: 5, b: 9}) => 14
         * totalValue({a: "a", b: 4}) => 4
         * 
         **/
    }

    usingForIn(object) {
        let result = 0;

        for (let item in object) {
            if (!Number(object[item]) || (typeof object[item] === 'boolean')) continue;

            result += Number(object[item])
        }

        return result;
    }

    usingReduseFunction(object) {
        let result = 0;
        Object.values(object).reduce((_, item) => {
            if (!Number(item) || (typeof item == 'boolean')) {
                return result += 0;
            }
            return result += Number(item)

        }, result)

        return result;
    }

    usingObjectKeys(object) {
        let result = 0;

        let arr = Object.keys(object),
            length = arr.length;

        for (let i = 0; i < length; i++) {
            let key = arr[i];
            if (!Number(object[key]) || (typeof object[key] === 'boolean')) {
                continue;
            }
            result += Number(object[key])
        }

        return result;
    }
}


module.exports = {
    CheckObjectProperty,
    CalcObjectPropertiesValue
}