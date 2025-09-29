// Level 1: Musical Alphabet & Note Recognition
export const level1Lessons =     {
      "id": "building_skills",
      "title": "🎹 LEVEL 2: Building Skills",
      "description": "Develop intermediate music theory and performance skills",
      "color": "#10B981",
      "lessons": [
        // INTERVALS SERIES (50 lessons)
        {
          "id": "unison_interval",
          "title": "Unison Interval",
          "description": "Same note, 0 semitones apart",
          "estimatedDuration": 12,
          "xpReward": 24,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple-choice",
              "question": "How many semitones are in a unison?",
              "options": ["0", "1", "2", "3"],
              "answer": "0",
              "explanation": "A unison is the same note, 0 semitones apart"
            },
            {
              "id": "ex2",
              "type": "multiple-choice",
              "question": "What is a unison interval?",
              "options": ["Two different notes", "The same note played twice", "A chord", "A scale"],
              "answer": "The same note played twice",
              "explanation": "A unison is when the same pitch is played simultaneously or in succession"
            },
            {
              "id": "ex3",
              "type": "multiple-choice",
              "question": "What is the interval from C to C?",
              "options": ["Unison", "Octave", "Perfect fifth", "Major third"],
              "answer": "Unison",
              "explanation": "C to C (same pitch) is a unison interval"
            },
            {
              "id": "ex4",
              "type": "multiple-choice",
              "question": "How does a unison sound?",
              "options": ["Dissonant", "Perfectly consonant", "Slightly off", "Very dissonant"],
              "answer": "Perfectly consonant",
              "explanation": "Unison is the most consonant interval since it's the same pitch"
            },
            {
              "id": "ex5",
              "type": "multiple-choice",
              "question": "In a choir, what creates a unison?",
              "options": ["Different parts singing different notes", "Everyone singing the same pitch", "Singing in harmony", "Singing scales"],
              "answer": "Everyone singing the same pitch",
              "explanation": "Unison in choir means all voices sing the same pitch"
            },
            {
              "id": "ex6",
              "type": "multiple-choice",
              "question": "What is the frequency ratio of a unison?",
              "options": ["1:1", "2:1", "3:2", "4:3"],
              "answer": "1:1",
              "explanation": "Unison has a frequency ratio of 1:1 (same frequency)"
            }
          ]
        },
        {
          "id": "minor_second",
          "title": "Minor Second",
          "description": "1 semitone apart",
          "estimatedDuration": 15,
          "xpReward": 30,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple-choice",
              "question": "How many semitones are in a minor second?",
              "options": ["1", "2", "3", "4"],
              "answer": "1",
              "explanation": "A minor second is 1 semitone apart"
            },
            {
              "id": "ex2",
              "type": "multiple-choice",
              "question": "What is an example of a minor second?",
              "options": ["C to D", "E to F", "F to G", "G to A"],
              "answer": "E to F",
              "explanation": "E to F is a natural minor second (1 semitone)"
            },
            {
              "id": "ex3",
              "type": "multiple-choice",
              "question": "How does a minor second sound?",
              "options": ["Very consonant", "Dissonant", "Pleasant", "Neutral"],
              "answer": "Dissonant",
              "explanation": "Minor seconds create tension and sound dissonant"
            },
            {
              "id": "ex4",
              "type": "multiple-choice",
              "question": "What is another name for a minor second?",
              "options": ["Half step", "Whole step", "Tone", "Ditone"],
              "answer": "Half step",
              "explanation": "A minor second is also called a half step or semitone"
            },
            {
              "id": "ex5",
              "type": "multiple-choice",
              "question": "Which is another example of a minor second?",
              "options": ["B to C", "C to D", "D to E", "A to B"],
              "answer": "B to C",
              "explanation": "B to C is a natural minor second (1 semitone)"
            },
            {
              "id": "ex6",
              "type": "multiple-choice",
              "question": "In the chromatic scale, how many minor seconds are there?",
              "options": ["5", "7", "12", "2"],
              "answer": "12",
              "explanation": "The chromatic scale consists of 12 minor seconds (semitones)"
            },
            {
              "id": "ex7",
              "type": "multiple-choice",
              "question": "What interval is C to C#?",
              "options": ["Unison", "Minor second", "Major second", "Minor third"],
              "answer": "Minor second",
              "explanation": "C to C# is a minor second (1 semitone up)"
            },
            {
              "id": "ex8",
              "type": "multiple-choice",
              "question": "How is a minor second used in music?",
              "options": ["To create tension", "For resolution", "Both A and B", "Neither"],
              "answer": "Both A and B",
              "explanation": "Minor seconds create tension that often resolves to consonant intervals"
            }
          ]
        },
        {
          "id": "major_second",
          "title": "Major Second",
          "description": "2 semitones apart",
          "estimatedDuration": 15,
          "xpReward": 30,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple-choice",
              "question": "How many semitones are in a major second?",
              "options": ["1", "2", "3", "4"],
              "answer": "2",
              "explanation": "A major second is 2 semitones apart"
            },
            {
              "id": "ex2",
              "type": "multiple-choice",
              "question": "What is an example of a major second?",
              "options": ["E to F", "C to D", "B to C", "F# to G"],
              "answer": "C to D",
              "explanation": "C to D is a major second (2 semitones)"
            },
            {
              "id": "ex3",
              "type": "multiple-choice",
              "question": "What is another name for a major second?",
              "options": ["Half step", "Whole step", "Semitone", "Quarter tone"],
              "answer": "Whole step",
              "explanation": "A major second is also called a whole step or tone"
            },
            {
              "id": "ex4",
              "type": "multiple-choice",
              "question": "How does a major second sound compared to a minor second?",
              "options": ["More dissonant", "Less dissonant", "The same", "Silent"],
              "answer": "Less dissonant",
              "explanation": "Major seconds are less dissonant than minor seconds"
            },
            {
              "id": "ex5",
              "type": "multiple-choice",
              "question": "Which is another example of a major second?",
              "options": ["D to E", "E to F", "B to C", "F to F#"],
              "answer": "D to E",
              "explanation": "D to E is a major second (2 semitones)"
            },
            {
              "id": "ex6",
              "type": "multiple-choice",
              "question": "In a major scale, how many major seconds are there?",
              "options": ["3", "4", "5", "7"],
              "answer": "5",
              "explanation": "A major scale contains 5 major seconds and 2 minor seconds"
            },
            {
              "id": "ex7",
              "type": "multiple-choice",
              "question": "What interval is F to G?",
              "options": ["Minor second", "Major second", "Minor third", "Major third"],
              "answer": "Major second",
              "explanation": "F to G is a major second (2 semitones)"
            },
            {
              "id": "ex8",
              "type": "multiple-choice",
              "question": "How many major seconds equal a perfect fourth?",
              "options": ["2", "2.5", "3", "4"],
              "answer": "2.5",
              "explanation": "A perfect fourth (5 semitones) equals 2.5 major seconds (2 semitones each)"
            }
          ]
        },
        {
          "id": "minor_third",
          "title": "Minor Third",
          "description": "3 semitones apart",
          "estimatedDuration": 18,
          "xpReward": 36,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple-choice",
              "question": "How many semitones are in a minor third?",
              "options": ["2", "3", "4", "5"],
              "answer": "3",
              "explanation": "A minor third is 3 semitones apart"
            },
            {
              "id": "ex2",
              "type": "multiple-choice",
              "question": "What is an example of a minor third?",
              "options": ["C to E", "C to D", "A to C", "F to A"],
              "answer": "A to C",
              "explanation": "A to C is a minor third (3 semitones)"
            },
            {
              "id": "ex3",
              "type": "multiple-choice",
              "question": "How does a minor third sound compared to a major third?",
              "options": ["Brighter", "Darker/sadder", "The same", "Louder"],
              "answer": "Darker/sadder",
              "explanation": "Minor thirds have a darker, more melancholic sound than major thirds"
            },
            {
              "id": "ex4",
              "type": "multiple-choice",
              "question": "Which chord contains a minor third?",
              "options": ["C major", "C minor", "C augmented", "C suspended"],
              "answer": "C minor",
              "explanation": "Minor chords are built with a minor third (C-Eb-G in C minor)"
            },
            {
              "id": "ex5",
              "type": "multiple-choice",
              "question": "What interval is E to G?",
              "options": ["Major second", "Minor third", "Major third", "Perfect fourth"],
              "answer": "Minor third",
              "explanation": "E to G is a minor third (3 semitones)"
            },
            {
              "id": "ex6",
              "type": "multiple-choice",
              "question": "In the natural minor scale, what interval is from the 1st to 3rd degree?",
              "options": ["Major third", "Minor third", "Perfect fourth", "Diminished third"],
              "answer": "Minor third",
              "explanation": "Natural minor scales have a minor third from tonic to the third degree"
            },
            {
              "id": "ex7",
              "type": "multiple-choice",
              "question": "What interval is D to F?",
              "options": ["Major second", "Minor third", "Major third", "Perfect fourth"],
              "answer": "Minor third",
              "explanation": "D to F is a minor third (3 semitones)"
            },
            {
              "id": "ex8",
              "type": "multiple-choice",
              "question": "How many minor thirds are in an octave?",
              "options": ["3", "4", "5", "6"],
              "answer": "4",
              "explanation": "An octave (12 semitones) contains exactly 4 minor thirds (3 semitones each)"
            },
            {
              "id": "ex9",
              "type": "multiple-choice",
              "question": "What is the inversion of a minor third?",
              "options": ["Major sixth", "Minor sixth", "Perfect fifth", "Major third"],
              "answer": "Major sixth",
              "explanation": "When inverted, a minor third becomes a major sixth"
            },
            {
              "id": "ex10",
              "type": "multiple-choice",
              "question": "Which scale degree relationship creates a minor third in C major?",
              "options": ["C to E", "D to F", "E to G", "Both B and C"],
              "answer": "Both B and C",
              "explanation": "In C major, both D-F and E-G are minor thirds"
            }
          ]
        },
        {
          "id": "major_third",
          "title": "Major Third",
          "description": "4 semitones apart",
          "estimatedDuration": 18,
          "xpReward": 36,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple-choice",
              "question": "How many semitones are in a major third?",
              "options": ["3", "4", "5", "6"],
              "answer": "4",
              "explanation": "A major third is 4 semitones apart"
            },
            {
              "id": "ex2",
              "type": "multiple-choice",
              "question": "What is an example of a major third?",
              "options": ["A to C", "C to E", "E to G", "D to F"],
              "answer": "C to E",
              "explanation": "C to E is a major third (4 semitones)"
            },
            {
              "id": "ex3",
              "type": "multiple-choice",
              "question": "How does a major third sound?",
              "options": ["Dark and sad", "Bright and happy", "Dissonant", "Neutral"],
              "answer": "Bright and happy",
              "explanation": "Major thirds have a bright, happy, consonant sound"
            },
            {
              "id": "ex4",
              "type": "multiple-choice",
              "question": "Which chord contains a major third?",
              "options": ["C minor", "C major", "C diminished", "C suspended"],
              "answer": "C major",
              "explanation": "Major chords are built with a major third (C-E-G in C major)"
            },
            {
              "id": "ex5",
              "type": "multiple-choice",
              "question": "What interval is F to A?",
              "options": ["Minor third", "Major third", "Perfect fourth", "Tritone"],
              "answer": "Major third",
              "explanation": "F to A is a major third (4 semitones)"
            },
            {
              "id": "ex6",
              "type": "multiple-choice",
              "question": "In the major scale, what interval is from the 1st to 3rd degree?",
              "options": ["Minor third", "Major third", "Perfect fourth", "Augmented third"],
              "answer": "Major third",
              "explanation": "Major scales have a major third from tonic to the third degree"
            },
            {
              "id": "ex7",
              "type": "multiple-choice",
              "question": "What interval is G to B?",
              "options": ["Minor third", "Major third", "Perfect fourth", "Tritone"],
              "answer": "Major third",
              "explanation": "G to B is a major third (4 semitones)"
            },
            {
              "id": "ex8",
              "type": "multiple-choice",
              "question": "How many major thirds are in an octave?",
              "options": ["2", "3", "4", "6"],
              "answer": "3",
              "explanation": "An octave (12 semitones) contains exactly 3 major thirds (4 semitones each)"
            },
            {
              "id": "ex9",
              "type": "multiple-choice",
              "question": "What is the inversion of a major third?",
              "options": ["Minor sixth", "Major sixth", "Perfect fifth", "Minor third"],
              "answer": "Minor sixth",
              "explanation": "When inverted, a major third becomes a minor sixth"
            },
            {
              "id": "ex10",
              "type": "multiple-choice",
              "question": "What creates the difference between major and minor chords?",
              "options": ["The fifth", "The third", "The root", "The seventh"],
              "answer": "The third",
              "explanation": "The third determines if a chord is major (major third) or minor (minor third)"
            }
          ]
        },
        {
          "id": "perfect_fourth",
          "title": "Perfect Fourth",
          "description": "5 semitones apart",
          "estimatedDuration": 18,
          "xpReward": 36,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple-choice",
              "question": "How many semitones are in a perfect fourth?",
              "options": ["4", "5", "6", "7"],
              "answer": "5",
              "explanation": "A perfect fourth is 5 semitones apart"
            },
            {
              "id": "ex2",
              "type": "multiple-choice",
              "question": "What is an example of a perfect fourth?",
              "options": ["C to E", "C to F", "C to G", "C to A"],
              "answer": "C to F",
              "explanation": "C to F is a perfect fourth (5 semitones)"
            },
            {
              "id": "ex3",
              "type": "multiple-choice",
              "question": "How does a perfect fourth sound?",
              "options": ["Very dissonant", "Consonant and stable", "Bright and happy", "Dark and sad"],
              "answer": "Consonant and stable",
              "explanation": "Perfect fourths are consonant and create a sense of stability"
            },
            {
              "id": "ex4",
              "type": "multiple-choice",
              "question": "What is the frequency ratio of a perfect fourth?",
              "options": ["3:2", "4:3", "5:4", "6:5"],
              "answer": "4:3",
              "explanation": "A perfect fourth has a frequency ratio of 4:3"
            },
            {
              "id": "ex5",
              "type": "multiple-choice",
              "question": "What interval is F to Bb?",
              "options": ["Major third", "Perfect fourth", "Tritone", "Perfect fifth"],
              "answer": "Perfect fourth",
              "explanation": "F to Bb is a perfect fourth (5 semitones)"
            },
            {
              "id": "ex6",
              "type": "multiple-choice",
              "question": "What is the inversion of a perfect fourth?",
              "options": ["Perfect fourth", "Perfect fifth", "Major sixth", "Minor seventh"],
              "answer": "Perfect fifth",
              "explanation": "When inverted, a perfect fourth becomes a perfect fifth"
            },
            {
              "id": "ex7",
              "type": "multiple-choice",
              "question": "In which chord progression is the perfect fourth prominent?",
              "options": ["I-V-vi-IV", "ii-V-I", "I-IV-V-I", "All of the above"],
              "answer": "All of the above",
              "explanation": "Perfect fourths appear in many common chord progressions"
            },
            {
              "id": "ex8",
              "type": "multiple-choice",
              "question": "What interval is G to C?",
              "options": ["Perfect fourth", "Perfect fifth", "Major sixth", "Minor seventh"],
              "answer": "Perfect fourth",
              "explanation": "G to C is a perfect fourth (5 semitones)"
            },
            {
              "id": "ex9",
              "type": "multiple-choice",
              "question": "In medieval music, how was the perfect fourth classified?",
              "options": ["Dissonant", "Perfect consonance", "Imperfect consonance", "Forbidden"],
              "answer": "Perfect consonance",
              "explanation": "Medieval theorists classified the perfect fourth as a perfect consonance"
            },
            {
              "id": "ex10",
              "type": "multiple-choice",
              "question": "What famous song starts with a perfect fourth?",
              "options": ["Twinkle Twinkle Little Star", "Amazing Grace", "Here Comes the Bride", "Happy Birthday"],
              "answer": "Here Comes the Bride",
              "explanation": "'Here Comes the Bride' (Wedding March) famously starts with a perfect fourth"
            }
          ]
        },
        {
          "id": "tritone",
          "title": "Tritone",
          "description": "6 semitones apart - the devil's interval",
          "estimatedDuration": 20,
          "xpReward": 40,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple-choice",
              "question": "How many semitones are in a tritone?",
              "options": ["5", "6", "7", "8"],
              "answer": "6",
              "explanation": "A tritone is 6 semitones apart, historically called the devil's interval"
            },
            {
              "id": "ex2",
              "type": "multiple-choice",
              "question": "What is an example of a tritone?",
              "options": ["C to F", "C to F#", "C to G", "C to E"],
              "answer": "C to F#",
              "explanation": "C to F# (or Gb) is a tritone (6 semitones)"
            },
            {
              "id": "ex3",
              "type": "multiple-choice",
              "question": "Why was the tritone called 'diabolus in musica'?",
              "options": ["It was too easy", "It sounded evil/dissonant", "It was too consonant", "It was invented by the devil"],
              "answer": "It sounded evil/dissonant",
              "explanation": "'Diabolus in musica' (devil in music) referred to its dissonant, unsettling sound"
            },
            {
              "id": "ex4",
              "type": "multiple-choice",
              "question": "What interval is F to B?",
              "options": ["Perfect fourth", "Tritone", "Perfect fifth", "Major sixth"],
              "answer": "Tritone",
              "explanation": "F to B is a tritone (6 semitones)"
            },
            {
              "id": "ex5",
              "type": "multiple-choice",
              "question": "How does a tritone divide the octave?",
              "options": ["Into thirds", "Exactly in half", "Into quarters", "Unevenly"],
              "answer": "Exactly in half",
              "explanation": "A tritone divides the octave exactly in half (6 + 6 = 12 semitones)"
            },
            {
              "id": "ex6",
              "type": "multiple-choice",
              "question": "What is the inversion of a tritone?",
              "options": ["Perfect fourth", "Perfect fifth", "Another tritone", "Major sixth"],
              "answer": "Another tritone",
              "explanation": "A tritone inverts to another tritone (6 semitones becomes 6 semitones)"
            },
            {
              "id": "ex7",
              "type": "multiple-choice",
              "question": "In which chord is the tritone prominent?",
              "options": ["Major triad", "Minor triad", "Diminished triad", "Augmented triad"],
              "answer": "Diminished triad",
              "explanation": "Diminished triads contain a tritone between the root and fifth"
            },
            {
              "id": "ex8",
              "type": "multiple-choice",
              "question": "What role does the tritone play in dominant 7th chords?",
              "options": ["Creates stability", "Creates tension that wants to resolve", "Makes it sound happy", "Has no effect"],
              "answer": "Creates tension that wants to resolve",
              "explanation": "The tritone in dominant 7th chords creates tension that resolves to the tonic"
            },
            {
              "id": "ex9",
              "type": "multiple-choice",
              "question": "In jazz music, how is the tritone used?",
              "options": ["It's avoided", "For tritone substitution", "Only in ballads", "Only in fast songs"],
              "answer": "For tritone substitution",
              "explanation": "Jazz uses tritone substitution to replace dominant chords with chords a tritone away"
            },
            {
              "id": "ex10",
              "type": "multiple-choice",
              "question": "What interval is B to F?",
              "options": ["Perfect fourth", "Tritone", "Perfect fifth", "Diminished fifth"],
              "answer": "Tritone",
              "explanation": "B to F is a tritone (6 semitones), also called a diminished fifth"
            },
            {
              "id": "ex11",
              "type": "multiple-choice",
              "question": "In medieval times, what was forbidden about the tritone?",
              "options": ["It was banned from all music", "It was avoided in sacred music", "It could only be played on Sundays", "Nothing was forbidden"],
              "answer": "It was avoided in sacred music",
              "explanation": "The tritone was generally avoided in medieval sacred music due to its dissonant sound"
            },
            {
              "id": "ex12",
              "type": "multiple-choice",
              "question": "What modern genres embrace the tritone?",
              "options": ["Classical only", "Jazz and blues", "Heavy metal", "Both B and C"],
              "answer": "Both B and C",
              "explanation": "Both jazz/blues and heavy metal music embrace the tritone's dissonant character"
            }
          ]
        },
        {
          "id": "perfect_fifth",
          "title": "Perfect Fifth",
          "description": "7 semitones apart",
          "estimatedDuration": 18,
          "xpReward": 36,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple-choice",
              "question": "How many semitones are in a perfect fifth?",
              "options": ["6", "7", "8", "9"],
              "answer": "7",
              "explanation": "A perfect fifth is 7 semitones apart"
            },
            {
              "id": "ex2",
              "type": "multiple-choice",
              "question": "What is an example of a perfect fifth?",
              "options": ["C to F", "C to G", "C to E", "C to A"],
              "answer": "C to G",
              "explanation": "C to G is a perfect fifth (7 semitones)"
            },
            {
              "id": "ex3",
              "type": "multiple-choice",
              "question": "How does a perfect fifth sound?",
              "options": ["Very dissonant", "Consonant and stable", "Neutral", "Tense"],
              "answer": "Consonant and stable",
              "explanation": "Perfect fifths are very consonant and create a sense of stability"
            },
            {
              "id": "ex4",
              "type": "multiple-choice",
              "question": "What is the frequency ratio of a perfect fifth?",
              "options": ["2:1", "3:2", "4:3", "5:4"],
              "answer": "3:2",
              "explanation": "A perfect fifth has a frequency ratio of 3:2"
            },
            {
              "id": "ex5",
              "type": "multiple-choice",
              "question": "In which chord is the perfect fifth most prominent?",
              "options": ["Major triad", "Minor triad", "Diminished triad", "All of the above"],
              "answer": "All of the above",
              "explanation": "Perfect fifths appear in major, minor, and diminished triads"
            },
            {
              "id": "ex6",
              "type": "multiple-choice",
              "question": "What interval is G to D?",
              "options": ["Perfect fourth", "Perfect fifth", "Major sixth", "Minor seventh"],
              "answer": "Perfect fifth",
              "explanation": "G to D is a perfect fifth (7 semitones)"
            },
            {
              "id": "ex7",
              "type": "multiple-choice",
              "question": "What is the inversion of a perfect fifth?",
              "options": ["Perfect fourth", "Major fourth", "Minor fourth", "Tritone"],
              "answer": "Perfect fourth",
              "explanation": "When inverted, a perfect fifth becomes a perfect fourth"
            },
            {
              "id": "ex8",
              "type": "multiple-choice",
              "question": "In medieval music, what was the perfect fifth called?",
              "options": ["Diabolus in musica", "Consonantia perfecta", "Quinta perfecta", "Harmonia"],
              "answer": "Consonantia perfecta",
              "explanation": "Medieval theorists called perfect consonances 'consonantia perfecta'"
            },
            {
              "id": "ex9",
              "type": "multiple-choice",
              "question": "How many perfect fifths are in the circle of fifths?",
              "options": ["7", "12", "5", "8"],
              "answer": "12",
              "explanation": "The circle of fifths contains 12 perfect fifths, one for each chromatic note"
            },
            {
              "id": "ex10",
              "type": "multiple-choice",
              "question": "What happens when you stack perfect fifths?",
              "options": ["You get major scales", "You get the circle of fifths", "You get dissonance", "Nothing special"],
              "answer": "You get the circle of fifths",
              "explanation": "Stacking perfect fifths creates the circle of fifths progression"
            }
          ]
        },
        {
          "id": "minor_sixth",
          "title": "Minor Sixth",
          "description": "8 semitones apart",
          "estimatedDuration": 16,
          "xpReward": 32,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple-choice",
              "question": "How many semitones are in a minor sixth?",
              "options": ["7", "8", "9", "10"],
              "answer": "8",
              "explanation": "A minor sixth is 8 semitones apart"
            },
            {
              "id": "ex2",
              "type": "multiple-choice",
              "question": "What is an example of a minor sixth?",
              "options": ["C to A", "C to Ab", "C to B", "C to Bb"],
              "answer": "C to Ab",
              "explanation": "C to Ab is a minor sixth (8 semitones)"
            },
            {
              "id": "ex3",
              "type": "multiple-choice",
              "question": "What is the inversion of a minor sixth?",
              "options": ["Major third", "Minor third", "Perfect fourth", "Major second"],
              "answer": "Major third",
              "explanation": "When inverted, a minor sixth becomes a major third"
            },
            {
              "id": "ex4",
              "type": "multiple-choice",
              "question": "How does a minor sixth sound?",
              "options": ["Very dissonant", "Melancholic but consonant", "Bright and happy", "Neutral"],
              "answer": "Melancholic but consonant",
              "explanation": "Minor sixths have a melancholic yet consonant quality"
            },
            {
              "id": "ex5",
              "type": "multiple-choice",
              "question": "What interval is E to C?",
              "options": ["Major sixth", "Minor sixth", "Perfect fifth", "Minor seventh"],
              "answer": "Minor sixth",
              "explanation": "E to C is a minor sixth (8 semitones)"
            },
            {
              "id": "ex6",
              "type": "multiple-choice",
              "question": "In which scale is the minor sixth prominent?",
              "options": ["Major scale", "Natural minor scale", "Pentatonic scale", "Chromatic scale"],
              "answer": "Natural minor scale",
              "explanation": "The natural minor scale features a minor sixth from the tonic"
            },
            {
              "id": "ex7",
              "type": "multiple-choice",
              "question": "What famous song features a minor sixth leap?",
              "options": ["Happy Birthday", "The Entertainer", "Love Story theme", "Twinkle Twinkle"],
              "answer": "Love Story theme",
              "explanation": "The Love Story theme famously opens with a minor sixth leap"
            },
            {
              "id": "ex8",
              "type": "multiple-choice",
              "question": "What interval is A to F?",
              "options": ["Perfect fifth", "Minor sixth", "Major sixth", "Minor seventh"],
              "answer": "Minor sixth",
              "explanation": "A to F is a minor sixth (8 semitones)"
            }
          ]
        },
        {
          "id": "major_sixth",
          "title": "Major Sixth",
          "description": "9 semitones apart",
          "estimatedDuration": 16,
          "xpReward": 32,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple-choice",
              "question": "How many semitones are in a major sixth?",
              "options": ["8", "9", "10", "11"],
              "answer": "9",
              "explanation": "A major sixth is 9 semitones apart"
            },
            {
              "id": "ex2",
              "type": "multiple-choice",
              "question": "What is an example of a major sixth?",
              "options": ["C to Ab", "C to A", "C to Bb", "C to B"],
              "answer": "C to A",
              "explanation": "C to A is a major sixth (9 semitones)"
            },
            {
              "id": "ex3",
              "type": "multiple-choice",
              "question": "What is the inversion of a major sixth?",
              "options": ["Minor third", "Major third", "Perfect fourth", "Minor second"],
              "answer": "Minor third",
              "explanation": "When inverted, a major sixth becomes a minor third"
            },
            {
              "id": "ex4",
              "type": "multiple-choice",
              "question": "How does a major sixth sound?",
              "options": ["Dissonant", "Warm and consonant", "Tense", "Neutral"],
              "answer": "Warm and consonant",
              "explanation": "Major sixths have a warm, consonant, and pleasant sound"
            },
            {
              "id": "ex5",
              "type": "multiple-choice",
              "question": "What interval is F to D?",
              "options": ["Minor sixth", "Major sixth", "Perfect fifth", "Minor seventh"],
              "answer": "Major sixth",
              "explanation": "F to D is a major sixth (9 semitones)"
            },
            {
              "id": "ex6",
              "type": "multiple-choice",
              "question": "In which scale is the major sixth prominent?",
              "options": ["Natural minor scale", "Major scale", "Harmonic minor scale", "Dorian mode"],
              "answer": "Major scale",
              "explanation": "The major scale features a major sixth from the tonic"
            },
            {
              "id": "ex7",
              "type": "multiple-choice",
              "question": "What famous song features a major sixth leap?",
              "options": ["My Bonnie Lies Over the Ocean", "Amazing Grace", "Silent Night", "Jingle Bells"],
              "answer": "My Bonnie Lies Over the Ocean",
              "explanation": "'My Bonnie' famously opens with a major sixth leap on 'My Bon-nie'"
            },
            {
              "id": "ex8",
              "type": "multiple-choice",
              "question": "What interval is G to E?",
              "options": ["Minor sixth", "Major sixth", "Perfect fifth", "Major seventh"],
              "answer": "Major sixth",
              "explanation": "G to E is a major sixth (9 semitones)"
            }
          ]
        },
        {
          "id": "minor_seventh",
          "title": "Minor Seventh",
          "description": "10 semitones apart",
          "estimatedDuration": 18,
          "xpReward": 36,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple-choice",
              "question": "How many semitones are in a minor seventh?",
              "options": ["9", "10", "11", "12"],
              "answer": "10",
              "explanation": "A minor seventh is 10 semitones apart"
            },
            {
              "id": "ex2",
              "type": "multiple-choice",
              "question": "What is an example of a minor seventh?",
              "options": ["C to B", "C to Bb", "C to A", "C to Ab"],
              "answer": "C to Bb",
              "explanation": "C to Bb is a minor seventh (10 semitones)"
            },
            {
              "id": "ex3",
              "type": "multiple-choice",
              "question": "What is the inversion of a minor seventh?",
              "options": ["Major second", "Minor second", "Perfect fourth", "Major third"],
              "answer": "Major second",
              "explanation": "When inverted, a minor seventh becomes a major second"
            },
            {
              "id": "ex4",
              "type": "multiple-choice",
              "question": "How does a minor seventh sound?",
              "options": ["Very consonant", "Mildly dissonant", "Extremely harsh", "Neutral"],
              "answer": "Mildly dissonant",
              "explanation": "Minor sevenths are mildly dissonant and create gentle tension"
            },
            {
              "id": "ex5",
              "type": "multiple-choice",
              "question": "In which chord is the minor seventh prominent?",
              "options": ["Major 7th chord", "Minor 7th chord", "Diminished chord", "Augmented chord"],
              "answer": "Minor 7th chord",
              "explanation": "Minor 7th chords contain a minor seventh interval from the root"
            },
            {
              "id": "ex6",
              "type": "multiple-choice",
              "question": "What interval is D to C?",
              "options": ["Major sixth", "Minor seventh", "Major seventh", "Perfect octave"],
              "answer": "Minor seventh",
              "explanation": "D to C is a minor seventh (10 semitones)"
            },
            {
              "id": "ex7",
              "type": "multiple-choice",
              "question": "In jazz music, how is the minor seventh used?",
              "options": ["It's avoided", "In dominant 7th chords", "Only in ballads", "For color and sophistication"],
              "answer": "For color and sophistication",
              "explanation": "Jazz uses minor sevenths extensively for harmonic color and sophistication"
            },
            {
              "id": "ex8",
              "type": "multiple-choice",
              "question": "What interval is G to F?",
              "options": ["Major sixth", "Minor seventh", "Major seventh", "Perfect fifth"],
              "answer": "Minor seventh",
              "explanation": "G to F is a minor seventh (10 semitones)"
            },
            {
              "id": "ex9",
              "type": "multiple-choice",
              "question": "How does a minor seventh resolve?",
              "options": ["Up by step", "Down by step", "Stays the same", "Jumps an octave"],
              "answer": "Down by step",
              "explanation": "Minor sevenths typically resolve downward by step for smooth voice leading"
            }
          ]
        },
        {
          "id": "major_seventh",
          "title": "Major Seventh",
          "description": "11 semitones apart",
          "estimatedDuration": 18,
          "xpReward": 36,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple-choice",
              "question": "How many semitones are in a major seventh?",
              "options": ["10", "11", "12", "13"],
              "answer": "11",
              "explanation": "A major seventh is 11 semitones apart"
            },
            {
              "id": "ex2",
              "type": "multiple-choice",
              "question": "What is an example of a major seventh?",
              "options": ["C to Bb", "C to B", "C to A", "C to Ab"],
              "answer": "C to B",
              "explanation": "C to B is a major seventh (11 semitones)"
            },
            {
              "id": "ex3",
              "type": "multiple-choice",
              "question": "What is the inversion of a major seventh?",
              "options": ["Minor second", "Major second", "Perfect fourth", "Minor third"],
              "answer": "Minor second",
              "explanation": "When inverted, a major seventh becomes a minor second"
            },
            {
              "id": "ex4",
              "type": "multiple-choice",
              "question": "How does a major seventh sound?",
              "options": ["Very consonant", "Sharply dissonant", "Neutral", "Warm"],
              "answer": "Sharply dissonant",
              "explanation": "Major sevenths are quite dissonant and create strong tension"
            },
            {
              "id": "ex5",
              "type": "multiple-choice",
              "question": "In which chord is the major seventh prominent?",
              "options": ["Minor 7th chord", "Major 7th chord", "Diminished chord", "Suspended chord"],
              "answer": "Major 7th chord",
              "explanation": "Major 7th chords contain a major seventh interval from the root"
            },
            {
              "id": "ex6",
              "type": "multiple-choice",
              "question": "What interval is F to E?",
              "options": ["Minor seventh", "Major seventh", "Perfect octave", "Minor second"],
              "answer": "Major seventh",
              "explanation": "F to E is a major seventh (11 semitones)"
            },
            {
              "id": "ex7",
              "type": "multiple-choice",
              "question": "In jazz music, how is the major seventh used?",
              "options": ["It's avoided", "For sophisticated harmony", "Only in fast songs", "Only in minor keys"],
              "answer": "For sophisticated harmony",
              "explanation": "Jazz uses major sevenths for sophisticated, colorful harmony"
            },
            {
              "id": "ex8",
              "type": "multiple-choice",
              "question": "What interval is B to A#?",
              "options": ["Minor seventh", "Major seventh", "Perfect octave", "Augmented sixth"],
              "answer": "Major seventh",
              "explanation": "B to A# is a major seventh (11 semitones)"
            },
            {
              "id": "ex9",
              "type": "multiple-choice",
              "question": "How does a major seventh typically resolve?",
              "options": ["Down by step", "Up by step", "Stays the same", "Jumps down an octave"],
              "answer": "Up by step",
              "explanation": "Major sevenths typically resolve upward by step to the octave"
            }
          ]
        },
        {
          "id": "perfect_octave",
          "title": "Perfect Octave",
          "description": "12 semitones apart",
          "estimatedDuration": 5,
          "xpReward": 10,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple-choice",
              "question": "How many semitones are in a perfect octave?",
              "options": ["10", "11", "12", "13"],
              "answer": "12",
              "explanation": "A perfect octave is 12 semitones apart"
            }
          ]
        }
      ]
    };
