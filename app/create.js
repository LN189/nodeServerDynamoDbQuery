var AWS = require("aws-sdk");
var awsConfig = {
    "region": "ap-south-1",
    "endpoint": "http://dynamodb.ap-south-1.amazonaws.com",
    "accessKeyId": "AKIAJMI4TLPSTF6JA5WQ", "secretAccessKey": "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"
};
AWS.config.update(awsConfig);

var docClient = new AWS.DynamoDB.DocumentClient();

var save = function (name,city,food) {

    var input = {
        "name": name, "city": city,
        "food": food
    };
    var params = {
        TableName: "sampletable",
        Item:  input
    };
    docClient.put(params, function (err, data) {

        if (err) {
            console.log("users::save::error - " + JSON.stringify(err, null, 2));
        } else {
            console.log("users::save::success" );
        }
    });
}
module.exports.save = save
