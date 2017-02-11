/**
 * Created by Zerk on 11-Feb-17.
 */

(function () {
    var canvas = new fabric.Canvas('canvas', {
        backgroundColor: '#fefefe',
        width: 1180,
        height: 600
    });

    // при создании шейпа у него нету ID, так мы сможем прямо в конструкторе давать ID
    fabric.Object.prototype.toObject = (function (toObject) {
        return function () {
            return fabric.util.object.extend(toObject.call(this), {
                id: this.id
            });
        };
    })(fabric.Object.prototype.toObject);

    var tableRect1 = new fabric.Rect({
        top: 100,
        left: 100,
        width: 100,
        height: 100,
        fill: 'red',
        id: 'TABLE-RECT-1'
    });

    var tableRect2 = new fabric.Rect({
        top: 100,
        left: 250,
        width: 100,
        height: 100,
        fill: 'blue',
        id: 'TABLE-RECT-2'
    });

    var tableRound1 = new fabric.Circle({
        top: 100,
        left: 400,
        radius: 50,
        fill: 'green',
        id: 'TABLE-ROUND-1'
    });

    var tableRound2 = new fabric.Circle({
        top: 100,
        left: 550,
        radius: 50,
        fill: 'orange',
        id: 'TABLE-ROUND-2'
    });

    canvas.add(tableRect1, tableRect2, tableRound1, tableRound2);

    // console.log('canvas as OBJ: ', canvas.toObject());

    var jsonResult = JSON.stringify(canvas);
    console.log('canvas as JSON: ', jsonResult);

    var objResult = JSON.parse(jsonResult);
    console.log('canvas as OBJ from jsonResult: ', objResult);

    var result = _.map(objResult.objects, 'id');
    console.log('result ID list is: ', result);
})();
