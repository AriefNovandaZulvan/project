@extends('layout')
@section('title', 'Word Scrambler')

@section('content')

    <div class="bodyofcontent" style="background-image:url({{asset('whatsapp.jpg')}})">
    <div class="bodyofheader">
        <p id="highscore">
          High Score  : 0
        </p>
        <p id="Sparator">
          ----------------------
        </p>
        <p id="playerscore">
          Your Score  : 0
        </p>
    </div>
        <div class="headerofgamer">
          <h1>Game of Word</h1>
        </div>
        <div class="bodyoftablemain" id="bodyoftablemain">
          Lets Have a game!!! in this game you will faced the scrambled word
          and you have to guest it... the longest word the greater you get the score.
          are you ready?
        </div>
        <div class="buttonplacer">
          <button onclick="renderform()">
            yep! lets go!
          </button>
        </div>
    </div>
@endsection
