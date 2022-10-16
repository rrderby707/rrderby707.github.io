<?php

 header('Access-Control-Allow-Origin: *'); 
 header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
 include 'emailconfig.php';
 require_once "Mail.php";

 $rest_json = file_get_contents("php://input");
 $_POST = json_decode($rest_json, true);
 $data = (array)json_decode($rest_json);
 $skaterName = $_POST["skaterName"];
 $age = $_POST["age"];
 $email_from = $_POST["email"];
 $phone = $_POST["phone"];
 $size = $_POST["size"];
 $notes = $_POST["notes"];
 $preferredName = $_POST["preferredName"];
 $returning = $_POST["returning"];
 $name = $_POST["guardian"];

    $body = "";

    foreach($data as $field => $response){
        $body = $body . "\r\n" . $field . ": " . $response;
    }

    //Create mail object, send

    require_once "Mail.php";
    global $body;
    $subject = "Juniors Sign Up";
    include 'emailconfig.php';
    $headers = array ('From' => $from,
    'To' => $to,
    'Subject' => $subject);
    $smtp = Mail::factory('smtp',
    array ('host' => $host,
    'port' => $port,
    'auth' => true,
    'username' => $emailUsername,
    'password' => $emailPassword));
    $mail = $smtp->send($to, $headers, $body);
    if (PEAR::isError($mail)) {
        echo("<p>" . $mail->getMessage() . "</p>");
        } else {
          
      
        } 

        

require_once __DIR__ . '/../vendor/autoload.php';
$jsonPath = __DIR__ . '/rollerderby-221418-02674f31c06b.json';
$jsonAuth = file_exists($jsonPath) ? $jsonPath : false;

$client = new \Google_Client();
$client->setApplicationName('Sheet Test');
$client->setScopes([\Google_Service_Sheets::SPREADSHEETS]);
$client->setAccessType('offline');
$client->setAuthConfig($jsonAuth);

/*
 * With the Google_Client we can get a Google_Service_Sheets service object to interact with sheets
 */

$data = [];
$spreadsheetId = '1Z-jrSZ62_pEDP_DU2dePQTD6M62P2jLVVsZ21tmKt0A';
$range = 'A1:B2';
$service = new Google_Service_Sheets($client);

function insertRow() {
    global $spreadsheetId, $range, $service;

    $requests = [
    
    new Google_Service_Sheets_Request([
        'insertDimension' => [
            'range' => [
                'sheetId' => 0,
                'dimension' => 'ROWS',
                'startIndex' => 1,
                'endIndex' => 2
            ],
            'inheritFromBefore' => false
        ]
        
    ]),

    ];

    // Add additional requests (operations) ...
    $batchUpdateRequest = new Google_Service_Sheets_BatchUpdateSpreadsheetRequest([
        'requests' => $requests
    ]);


    $response = $service->spreadsheets->batchUpdate($spreadsheetId, $batchUpdateRequest);
    }

function writeRow() {
    global $spreadsheetId, $range, $service, $data;
    $dataArr = [];
    foreach ($data as $field => $value){
        arr_push($dataArr, $value);
    }
    $range = 'A2:D2';
    $requests = 
        new Google_Service_Sheets_ValueRange ([
            'range' => 'A2:D2',
            'majorDimension' => 'ROWS',
            'values' => [
                ['test', 'test2', 'test3']
            ]

        ])
        ;
    $response = $service->spreadsheets_values->update($spreadsheetId, $range, $requests, ['valueInputOption' => "RAW"]);

}

insertRow();
writeRow();





 ?>
