<?php
    function fetchData($url){
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_TIMEOUT, 20);
        $result = curl_exec($ch);
        curl_close($ch);
        return $result;
    }
    $result = fetchData("https://api.instagram.com/v1/users/4489375?access_token=3b9986216baf4517bd09f5f3f772990e");
    $result = json_decode($result);
    echo $result;
?>