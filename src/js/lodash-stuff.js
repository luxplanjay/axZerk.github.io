/**
 * Created by Zerk on 09-Feb-17.
 */

// Lodash stuff
(function () {

    loadJSON('./db/data.json')
        .then(function (data) {
            let result = _.attempt(JSON.parse.bind(null, data));
            console.log('Object: ', result);

            let skills = getSkills(result);
            console.log('Skills: ', skills);

            let names = getNames(result);
            console.log('Names: ', names);

            let friends = getFriends(result);
            console.log('Friends: ', friends);
        });

    function getSkills(arr) {
        let result = _.chain(arr)
            .map('skills')
            .flattenDepth(1)
            .uniq()
            .value();

        return result.sort(compare);
    }

    function getNames(arr) {
        let result = _.chain(arr)
            .sortBy('friends')
            .map('name')
            .value();
        return result;
    }

    function getFriends(arr) {
        let result = _.chain(arr)
            .map('friends')
            .flattenDepth(1)
            .map('name')
            .uniq()
            .value();

        return result;
    }

    function loadJSON(path) {
        return new Promise(function (resolve, reject) {
            let request = new XMLHttpRequest();
            request.open('GET', path, true);

            request.onload = function () {
                resolve(this.responseText);
            };

            request.onerror = reject;
            request.send(null);
        });
    }

    function compare(x, y) {
        var tmp = x.toLowerCase().localeCompare(y.toLowerCase());

        if (tmp != 0) return tmp;

        if (x > y) {
            return 1;
        } else if (x < y) {
            return -1;
        } else {
            return 0;
        }
    }

})();
