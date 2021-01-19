while (true) {
    if (input.lightLevel() > 65) {
        // twinkle twinkle little star
        music.playMelody("C C G G A A G F F E E D D C G G F F E E D G G F F E E D C C G G A A G F F E E D D C", 104)
    } else {
        music.stopAllSounds()
    }
    
}
