<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class sender extends Controller
{
  function send(){
    $randomize = $_GET['randomize'];
    $url = 'https://nlp.fi.muni.cz/projekty/random_word/run.cgi?language_selection=en&word_selection=nouns&model_selection=norm&length_selection='.$randomize.'&probability_selection=true';
    $ch = curl_init();

    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    $data = '';
    curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
    $output = curl_exec($ch);
    echo $output;
    curl_close($ch);
  }
  function renderform(){
    $rendered = '
      <p id="Headerword">
        Word :
      </p >
      <p id="word">

      </p >
      <p id="headerdefiniton">
        Hint :
      </p >
      <p id="definiton">

      </p>';
    echo $rendered;
  }
}
