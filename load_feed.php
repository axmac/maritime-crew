<?php
	// ---------------------------------------------------------------------------------------------
	// Set the URLs from ArtistData>Tools>Data Feeds into these variables.
	$pastShowsXml = "http://artistdata.sonicbids.com/the-maritime-crew/shows/xml/past";
	$futureShowsXml = "http://artistdata.sonicbids.com/the-maritime-crew/shows/xml/future";
	$allShowsXml = "http://artistdata.sonicbids.com/the-maritime-crew/shows/xml/all";
	$newsXml = "http://artistdata.sonicbids.com/heidi-talbot/news/xml";
	$blogXml = "http://artistdata.sonicbids.com/heidi-talbot/blog/xml";
	$rssXML = "http://feeds.artistdata.com/rss.newfeeds/artist/AR-3XF14A8305TRU86G/rss";
	// ---------------------------------------------------------------------------------------------
	
	switch ($_GET["source"]) {
		case "pastshows"	: $source = $pastShowsXml; break;
		case "futureshows"	: $source = $futureShowsXml; break;
		case "allshows"		: $source = $allShowsXml; break;
		case "news"			: $source = $newsXml; break;
		case "blog"			: $source = $blogXml; break;
		case "rss"			: $source = $rssXML; break;
	}

	// Load the target file.
    $xml = file_get_contents($source);

	// Set the content type and send the loaded content to the page.
	header("Content-type: text/xml");
    echo $xml;
?>
