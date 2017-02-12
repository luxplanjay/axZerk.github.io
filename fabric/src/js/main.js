/**
 * Created by Zerk on 11-Feb-17.
 */

(function () {
    var canvas = new fabric.Canvas('canvas', {
        backgroundColor: '#fefefe',
        width: 1180,
        height: 600
    });

    // >>>> fabric.util.object.extend не сработал!!!
    // После сериализации терялись некоторые фигуры(они были в json но
    // не отображались после загрузки канваса из json o.O ),
    // в моем случае оба круга
    //
    // fabric.Object.prototype.toObject = (function (toObject) {
    //     return function () {
    //         return fabric.util.object.extend(toObject.call(this), {
    //             objectId: this.objectId
    //         });
    //     };
    // })(fabric.Object.prototype.toObject);

    // Так работает ок
    fabric.Object.prototype.toObject = (function (toObject) {
        return function (propertiesToInclude) {
            propertiesToInclude = (propertiesToInclude || []).concat(
                ['objectId']
            );
            return toObject.apply(this, [propertiesToInclude]);
        };
    })(fabric.Object.prototype.toObject);


    var tableRect1 = new fabric.Rect({
        top: 100,
        left: 100,
        width: 100,
        height: 100,
        fill: 'red',
        objectId: 'TABLE-RECT-1'
    });

    var tableRect2 = new fabric.Rect({
        top: 100,
        left: 250,
        width: 100,
        height: 100,
        fill: 'blue',
        objectId: 'TABLE-RECT-2'
    });

    var tableRound1 = new fabric.Circle({
        top: 100,
        left: 400,
        radius: 50,
        fill: 'green',
        objectId: 'TABLE-ROUND-1'
    });

    var tableRound2 = new fabric.Circle({
        top: 100,
        left: 550,
        radius: 50,
        fill: 'orange',
        objectId: 'TABLE-ROUND-2'
    });

    canvas.add(tableRect1, tableRect2, tableRound1, tableRound2);


    var asJson = JSON.stringify(canvas);
    console.log('Canvas as JSON: \n', asJson);

    var asObj = JSON.parse(asJson);
    console.log('\nCanvas as OBJ from jsonResult: ', asObj);

    var result = _.map(asObj.objects, 'objectId');
    console.log('\nResult ID list is: ', result);


    // загружаем канвас из json по новой, для проверки сериализации всех полей фигур
    setTimeout(function () {
        canvas.loadFromJSON(asJson);
        console.log('\nCANVAS RELOADED FROM JSON!!! \n');
        console.log(canvas.toObject());

        // потом можно по objectId легко выбрать нужную фигуру
        var canvasObjects = canvas.getObjects();

        _.forEach(canvasObjects, function (item) {
            if (item.objectId === 'TABLE-RECT-2') {
                console.log('\nGOT IT!, id = TABLE-RECT-2: ', item);
            }
        });

    }, 2000);

})();
