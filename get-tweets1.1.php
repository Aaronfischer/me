<?php
    session_start();
    require_once("utilities/twitteroauth/twitteroauth.php"); //Path to twitteroauth library

    $twitteruser = "aaronfischer";
    $notweets = 30;
    $consumerkey = "LWt3ILGWuVCg2Qh8KqEyh28ja";
    $consumersecret = "hwZNF3II3dUUdtxZDU0uUYIIVf2C8M5urnvlVIyL7pz7vxat5Y";
    $accesstoken = "14588466-rDQwBdHz1jz2v68lpmfluZ5WlBY2JdzhU0pqgezaW";
    $accesstokensecret = "81NRIKHYPINGOq1ya2rTIfUKIFgGUXQp3a4zaeVtTTMbv";

    function getConnectionWithAccessToken($cons_key, $cons_secret, $oauth_token, $oauth_token_secret) {
        $connection = new TwitterOAuth($cons_key, $cons_secret, $oauth_token, $oauth_token_secret);
        return $connection;
    }

    $connection = getConnectionWithAccessToken($consumerkey, $consumersecret, $accesstoken, $accesstokensecret);

    $tweets = $connection->get("https://api.twitter.com/1.1/users/show.json?screen_name=".$twitteruser."&count=".$notweets);

    echo json_encode($tweets);
?>