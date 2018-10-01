@extends('layout')
@section('title', 'Word Scrambler')

@section('content')

    <div class="bodyofcontent" style="background-image:url({{asset('whatsapp.jpg')}})">
    <div class="bodyofheader">
        
    </div>
        <div class="headerofgamer">
          <h1>Game of Word</h1>
        </div>
        <div class="bodyoftablemain">
          <p id="Headerword">
            Word :    
          </p >
          <p id="word">
            Lets Have a game!!! in this game you will faced the scrambled word
            and you have to guest it... the longest word the greater you get the score.
            are you ready?
          </p >
          <p id="headerdefiniton">
            Definition :    
          </p >
          <p id="definiton">
            
          </p>
          <button onclick="Scater()">
            yep! lets go!
          </button>
        </div>
    </div>
@endsection
