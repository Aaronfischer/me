<?php
    include('utilities/flickr.php');

    $params = array(
       'api_key' => '0b6cd19f8d79fa07eb5b3057ce973db7',
       'format' => Flickr::JSON,
       'method' => 'flickr.photos.search',
       'user_id' => '35694074@N02',
       'tags' =>'profile'
    );

    $flickr_results = Flickr::makeCall($params);
    echo $flickr_results;
?>