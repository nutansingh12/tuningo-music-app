// Level 1: Musical Alphabet & Note Recognition
export const level1Lessons =        {
      "id": "expanding",
      "title": "🎸 LEVEL 3: Expanding",
      "description": "Advanced theory and composition techniques",
      "color": "#F59E0B",
      "lessons": [
        // SCALES SERIES (100 lessons)
        {
          "id": "c_major_scale",
          "title": "C Major Scale",
          "description": "The foundation scale with no sharps or flats",
          "estimatedDuration": 20,
          "xpReward": 40,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple-choice",
              "question": "Which notes are in the C major scale?",
              "options": ["C-D-E-F-G-A-B", "C-D-E-F#-G-A-B", "C-D-E♭-F-G-A-B", "C-D-E-F-G-A-B♭"],
              "answer": "C-D-E-F-G-A-B",
              "explanation": "C major has no sharps or flats: C-D-E-F-G-A-B"
            },
            {
              "id": "ex2",
              "type": "multiple-choice",
              "question": "How many sharps or flats does C major have?",
              "options": ["1 sharp", "2 flats", "None", "3 sharps"],
              "answer": "None",
              "explanation": "C major is the only major scale with no sharps or flats"
            },
            {
              "id": "ex3",
              "type": "multiple-choice",
              "question": "What is the pattern of whole and half steps in C major?",
              "options": ["W-W-H-W-W-W-H", "W-H-W-W-H-W-W", "H-W-W-H-W-W-W", "W-W-W-H-W-W-H"],
              "answer": "W-W-H-W-W-W-H",
              "explanation": "Major scales follow the pattern: Whole-Whole-Half-Whole-Whole-Whole-Half"
            },
            {
              "id": "ex4",
              "type": "multiple-choice",
              "question": "What is the tonic of C major?",
              "options": ["C", "D", "E", "G"],
              "answer": "C",
              "explanation": "The tonic is the first degree of the scale, which is C in C major"
            },
            {
              "id": "ex5",
              "type": "multiple-choice",
              "question": "What is the dominant of C major?",
              "options": ["F", "G", "A", "B"],
              "answer": "G",
              "explanation": "The dominant is the fifth degree of the scale, which is G in C major"
            },
            {
              "id": "ex6",
              "type": "multiple-choice",
              "question": "What is the subdominant of C major?",
              "options": ["D", "E", "F", "G"],
              "answer": "F",
              "explanation": "The subdominant is the fourth degree of the scale, which is F in C major"
            },
            {
              "id": "ex7",
              "type": "multiple-choice",
              "question": "What is the leading tone of C major?",
              "options": ["A", "B", "C", "D"],
              "answer": "B",
              "explanation": "The leading tone is the seventh degree, which leads back to the tonic (B leads to C)"
            },
            {
              "id": "ex8",
              "type": "multiple-choice",
              "question": "Why is C major considered the 'natural' scale?",
              "options": ["It's the easiest to play", "It uses only white keys on piano", "It's the most common", "It sounds the best"],
              "answer": "It uses only white keys on piano",
              "explanation": "C major uses only the white keys on a piano, making it appear 'natural'"
            },
            {
              "id": "ex9",
              "type": "multiple-choice",
              "question": "What chord is built on the first degree of C major?",
              "options": ["C major", "D minor", "F major", "G major"],
              "answer": "C major",
              "explanation": "The I chord in C major is C major (C-E-G)"
            },
            {
              "id": "ex10",
              "type": "multiple-choice",
              "question": "What is the relative minor of C major?",
              "options": ["A minor", "E minor", "D minor", "G minor"],
              "answer": "A minor",
              "explanation": "A minor is the relative minor of C major (same notes, different starting point)"
            }
          ]
        },
        {
          "id": "g_major_scale",
          "title": "G Major Scale",
          "description": "One sharp: F#",
          "estimatedDuration": 18,
          "xpReward": 36,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple-choice",
              "question": "Which sharp is in G major?",
              "options": ["C#", "F#", "G#", "D#"],
              "answer": "F#",
              "explanation": "G major has one sharp: F#"
            },
            {
              "id": "ex2",
              "type": "multiple-choice",
              "question": "What are the notes in G major scale?",
              "options": ["G-A-B-C-D-E-F#", "G-A-B-C-D-E-F", "G-A-B-C#-D-E-F#", "G-A-B♭-C-D-E-F"],
              "answer": "G-A-B-C-D-E-F#",
              "explanation": "G major scale: G-A-B-C-D-E-F# (only F is sharped)"
            },
            {
              "id": "ex3",
              "type": "multiple-choice",
              "question": "What is the dominant chord in G major?",
              "options": ["C major", "D major", "E minor", "F# diminished"],
              "answer": "D major",
              "explanation": "The dominant (V) chord in G major is D major"
            },
            {
              "id": "ex4",
              "type": "multiple-choice",
              "question": "What is the subdominant chord in G major?",
              "options": ["A minor", "B minor", "C major", "D major"],
              "answer": "C major",
              "explanation": "The subdominant (IV) chord in G major is C major"
            },
            {
              "id": "ex5",
              "type": "multiple-choice",
              "question": "What is the relative minor of G major?",
              "options": ["D minor", "E minor", "A minor", "B minor"],
              "answer": "E minor",
              "explanation": "E minor is the relative minor of G major (same key signature)"
            },
            {
              "id": "ex6",
              "type": "multiple-choice",
              "question": "In the circle of fifths, G major is how many steps from C major?",
              "options": ["1 step clockwise", "2 steps clockwise", "1 step counter-clockwise", "3 steps clockwise"],
              "answer": "1 step clockwise",
              "explanation": "G major is one step clockwise from C major in the circle of fifths"
            },
            {
              "id": "ex7",
              "type": "multiple-choice",
              "question": "What scale degree is F# in G major?",
              "options": ["6th", "7th", "1st", "2nd"],
              "answer": "7th",
              "explanation": "F# is the 7th degree (leading tone) in G major"
            },
            {
              "id": "ex8",
              "type": "multiple-choice",
              "question": "Which mode starts on the 2nd degree of G major?",
              "options": ["A Dorian", "A Phrygian", "A Mixolydian", "A Aeolian"],
              "answer": "A Dorian",
              "explanation": "A Dorian mode uses the same notes as G major, starting on A"
            },
            {
              "id": "ex9",
              "type": "multiple-choice",
              "question": "What is the key signature for G major?",
              "options": ["No sharps or flats", "One sharp", "Two sharps", "One flat"],
              "answer": "One sharp",
              "explanation": "G major has one sharp (F#) in its key signature"
            }
          ]
        },
        {
          "id": "d_major_scale",
          "title": "D Major Scale",
          "description": "Two sharps: F# and C#",
          "estimatedDuration": 18,
          "xpReward": 36,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple-choice",
              "question": "Which sharps are in D major?",
              "options": ["F# and C#", "F# and G#", "C# and G#", "F# and D#"],
              "answer": "F# and C#",
              "explanation": "D major has two sharps: F# and C#"
            },
            {
              "id": "ex2",
              "type": "multiple-choice",
              "question": "What are the notes in D major scale?",
              "options": ["D-E-F#-G-A-B-C#", "D-E-F-G-A-B-C", "D-E-F#-G-A-B-C", "D-E♭-F-G-A-B♭-C"],
              "answer": "D-E-F#-G-A-B-C#",
              "explanation": "D major scale: D-E-F#-G-A-B-C# (F and C are sharped)"
            },
            {
              "id": "ex3",
              "type": "multiple-choice",
              "question": "What is the dominant chord in D major?",
              "options": ["G major", "A major", "B minor", "C# diminished"],
              "answer": "A major",
              "explanation": "The dominant (V) chord in D major is A major"
            },
            {
              "id": "ex4",
              "type": "multiple-choice",
              "question": "What is the subdominant chord in D major?",
              "options": ["E minor", "F# minor", "G major", "A major"],
              "answer": "G major",
              "explanation": "The subdominant (IV) chord in D major is G major"
            },
            {
              "id": "ex5",
              "type": "multiple-choice",
              "question": "What is the relative minor of D major?",
              "options": ["A minor", "B minor", "C# minor", "F# minor"],
              "answer": "B minor",
              "explanation": "B minor is the relative minor of D major (same key signature)"
            },
            {
              "id": "ex6",
              "type": "multiple-choice",
              "question": "In the circle of fifths, D major is how many steps from C major?",
              "options": ["1 step clockwise", "2 steps clockwise", "3 steps clockwise", "1 step counter-clockwise"],
              "answer": "2 steps clockwise",
              "explanation": "D major is two steps clockwise from C major (C→G→D)"
            },
            {
              "id": "ex7",
              "type": "multiple-choice",
              "question": "What scale degree is C# in D major?",
              "options": ["6th", "7th", "1st", "2nd"],
              "answer": "7th",
              "explanation": "C# is the 7th degree (leading tone) in D major"
            },
            {
              "id": "ex8",
              "type": "multiple-choice",
              "question": "Which mode starts on the 2nd degree of D major?",
              "options": ["E Dorian", "E Phrygian", "E Mixolydian", "E Aeolian"],
              "answer": "E Dorian",
              "explanation": "E Dorian mode uses the same notes as D major, starting on E"
            },
            {
              "id": "ex9",
              "type": "multiple-choice",
              "question": "How many sharps does D major have?",
              "options": ["1", "2", "3", "4"],
              "answer": "2",
              "explanation": "D major has two sharps: F# and C#"
            }
          ]
        },
        {
          "id": "a_major_scale",
          "title": "A Major Scale",
          "description": "Three sharps: F#, C#, and G#",
          "estimatedDuration": 18,
          "xpReward": 36,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple-choice",
              "question": "How many sharps does A major have?",
              "options": ["2", "3", "4", "5"],
              "answer": "3",
              "explanation": "A major has three sharps: F#, C#, and G#"
            },
            {
              "id": "ex2",
              "type": "multiple-choice",
              "question": "What are the notes in A major scale?",
              "options": ["A-B-C#-D-E-F#-G#", "A-B-C-D-E-F-G", "A-B-C#-D-E-F-G#", "A-B♭-C-D-E♭-F-G"],
              "answer": "A-B-C#-D-E-F#-G#",
              "explanation": "A major scale: A-B-C#-D-E-F#-G# (F, C, and G are sharped)"
            },
            {
              "id": "ex3",
              "type": "multiple-choice",
              "question": "What is the dominant chord in A major?",
              "options": ["D major", "E major", "F# minor", "G# diminished"],
              "answer": "E major",
              "explanation": "The dominant (V) chord in A major is E major"
            },
            {
              "id": "ex4",
              "type": "multiple-choice",
              "question": "What is the subdominant chord in A major?",
              "options": ["B minor", "C# minor", "D major", "E major"],
              "answer": "D major",
              "explanation": "The subdominant (IV) chord in A major is D major"
            },
            {
              "id": "ex5",
              "type": "multiple-choice",
              "question": "What is the relative minor of A major?",
              "options": ["E minor", "F# minor", "G# minor", "C# minor"],
              "answer": "F# minor",
              "explanation": "F# minor is the relative minor of A major (same key signature)"
            },
            {
              "id": "ex6",
              "type": "multiple-choice",
              "question": "In the circle of fifths, A major is how many steps from C major?",
              "options": ["2 steps clockwise", "3 steps clockwise", "4 steps clockwise", "1 step clockwise"],
              "answer": "3 steps clockwise",
              "explanation": "A major is three steps clockwise from C major (C→G→D→A)"
            },
            {
              "id": "ex7",
              "type": "multiple-choice",
              "question": "What scale degree is G# in A major?",
              "options": ["6th", "7th", "1st", "2nd"],
              "answer": "7th",
              "explanation": "G# is the 7th degree (leading tone) in A major"
            },
            {
              "id": "ex8",
              "type": "multiple-choice",
              "question": "Which mode starts on the 2nd degree of A major?",
              "options": ["B Dorian", "B Phrygian", "B Mixolydian", "B Aeolian"],
              "answer": "B Dorian",
              "explanation": "B Dorian mode uses the same notes as A major, starting on B"
            },
            {
              "id": "ex9",
              "type": "multiple-choice",
              "question": "What are the three sharps in A major?",
              "options": ["F#, C#, G#", "F#, C#, D#", "C#, G#, D#", "F#, G#, A#"],
              "answer": "F#, C#, G#",
              "explanation": "A major has three sharps: F#, C#, and G# (in that order)"
            }
          ]
        },
        {
          "id": "e_major_scale",
          "title": "E Major Scale",
          "description": "Four sharps: F#, C#, G#, and D#",
          "estimatedDuration": 18,
          "xpReward": 36,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple-choice",
              "question": "How many sharps does E major have?",
              "options": ["3", "4", "5", "6"],
              "answer": "4",
              "explanation": "E major has four sharps: F#, C#, G#, and D#"
            },
            {
              "id": "ex2",
              "type": "multiple-choice",
              "question": "What are the notes in E major scale?",
              "options": ["E-F#-G#-A-B-C#-D#", "E-F-G-A-B-C-D", "E-F#-G-A-B-C#-D", "E-F-G#-A-B-C-D#"],
              "answer": "E-F#-G#-A-B-C#-D#",
              "explanation": "E major scale: E-F#-G#-A-B-C#-D# (F, C, G, and D are sharped)"
            },
            {
              "id": "ex3",
              "type": "multiple-choice",
              "question": "What is the dominant chord in E major?",
              "options": ["A major", "B major", "C# minor", "D# diminished"],
              "answer": "B major",
              "explanation": "The dominant (V) chord in E major is B major"
            },
            {
              "id": "ex4",
              "type": "multiple-choice",
              "question": "What is the subdominant chord in E major?",
              "options": ["F# minor", "G# minor", "A major", "B major"],
              "answer": "A major",
              "explanation": "The subdominant (IV) chord in E major is A major"
            },
            {
              "id": "ex5",
              "type": "multiple-choice",
              "question": "What is the relative minor of E major?",
              "options": ["B minor", "C# minor", "D# minor", "F# minor"],
              "answer": "C# minor",
              "explanation": "C# minor is the relative minor of E major (same key signature)"
            },
            {
              "id": "ex6",
              "type": "multiple-choice",
              "question": "In the circle of fifths, E major is how many steps from C major?",
              "options": ["3 steps clockwise", "4 steps clockwise", "5 steps clockwise", "2 steps clockwise"],
              "answer": "4 steps clockwise",
              "explanation": "E major is four steps clockwise from C major (C→G→D→A→E)"
            },
            {
              "id": "ex7",
              "type": "multiple-choice",
              "question": "What scale degree is D# in E major?",
              "options": ["6th", "7th", "1st", "2nd"],
              "answer": "7th",
              "explanation": "D# is the 7th degree (leading tone) in E major"
            },
            {
              "id": "ex8",
              "type": "multiple-choice",
              "question": "Which mode starts on the 2nd degree of E major?",
              "options": ["F# Dorian", "F# Phrygian", "F# Mixolydian", "F# Aeolian"],
              "answer": "F# Dorian",
              "explanation": "F# Dorian mode uses the same notes as E major, starting on F#"
            },
            {
              "id": "ex9",
              "type": "multiple-choice",
              "question": "What are the four sharps in E major?",
              "options": ["F#, C#, G#, D#", "F#, C#, G#, A#", "C#, G#, D#, A#", "F#, G#, D#, A#"],
              "answer": "F#, C#, G#, D#",
              "explanation": "E major has four sharps: F#, C#, G#, and D# (in that order)"
            }
          ]
        },
        {
          "id": "b_and_bb_major_scales",
          "title": "B Major & B♭ Major Scales",
          "description": "Comparing sharp and flat major scales",
          "estimatedDuration": 20,
          "xpReward": 40,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple-choice",
              "question": "How many sharps does B major have?",
              "options": ["4", "5", "6", "7"],
              "answer": "5",
              "explanation": "B major has five sharps: F#, C#, G#, D#, and A#"
            },
            {
              "id": "ex2",
              "type": "multiple-choice",
              "question": "How many flats does B♭ major have?",
              "options": ["1", "2", "3", "4"],
              "answer": "2",
              "explanation": "B♭ major has two flats: B♭ and E♭"
            },
            {
              "id": "ex3",
              "type": "multiple-choice",
              "question": "What are the notes in B major scale?",
              "options": ["B-C#-D#-E-F#-G#-A#", "B-C-D-E-F-G-A", "B-C#-D-E-F#-G-A#", "B-C-D#-E-F-G#-A"],
              "answer": "B-C#-D#-E-F#-G#-A#",
              "explanation": "B major scale: B-C#-D#-E-F#-G#-A# (five sharps)"
            },
            {
              "id": "ex4",
              "type": "multiple-choice",
              "question": "What are the notes in B♭ major scale?",
              "options": ["B♭-C-D-E♭-F-G-A", "B♭-C-D-E-F-G-A", "B-C-D-E♭-F-G-A", "B♭-C-D♭-E♭-F-G-A♭"],
              "answer": "B♭-C-D-E♭-F-G-A",
              "explanation": "B♭ major scale: B♭-C-D-E♭-F-G-A (two flats: B♭ and E♭)"
            },
            {
              "id": "ex5",
              "type": "multiple-choice",
              "question": "What is the relative minor of B major?",
              "options": ["F# minor", "G# minor", "A# minor", "C# minor"],
              "answer": "G# minor",
              "explanation": "G# minor is the relative minor of B major (same key signature)"
            },
            {
              "id": "ex6",
              "type": "multiple-choice",
              "question": "What is the relative minor of B♭ major?",
              "options": ["F minor", "G minor", "A minor", "D minor"],
              "answer": "G minor",
              "explanation": "G minor is the relative minor of B♭ major (same key signature)"
            },
            {
              "id": "ex7",
              "type": "multiple-choice",
              "question": "In the circle of fifths, B major is how many steps from C major?",
              "options": ["4 steps clockwise", "5 steps clockwise", "6 steps clockwise", "7 steps clockwise"],
              "answer": "5 steps clockwise",
              "explanation": "B major is five steps clockwise from C major (C→G→D→A→E→B)"
            },
            {
              "id": "ex8",
              "type": "multiple-choice",
              "question": "In the circle of fifths, B♭ major is how many steps from C major?",
              "options": ["1 step counter-clockwise", "2 steps counter-clockwise", "3 steps counter-clockwise", "1 step clockwise"],
              "answer": "2 steps counter-clockwise",
              "explanation": "B♭ major is two steps counter-clockwise from C major (C→F→B♭)"
            },
            {
              "id": "ex9",
              "type": "multiple-choice",
              "question": "Which scale has more accidentals: B major or B♭ major?",
              "options": ["B major", "B♭ major", "They have the same", "Neither has accidentals"],
              "answer": "B major",
              "explanation": "B major has 5 sharps while B♭ major has only 2 flats"
            },
            {
              "id": "ex10",
              "type": "multiple-choice",
              "question": "What is the dominant chord in B major?",
              "options": ["E major", "F# major", "G# minor", "A# diminished"],
              "answer": "F# major",
              "explanation": "The dominant (V) chord in B major is F# major"
            },
            {
              "id": "ex11",
              "type": "multiple-choice",
              "question": "What is the dominant chord in B♭ major?",
              "options": ["E♭ major", "F major", "G minor", "A diminished"],
              "answer": "F major",
              "explanation": "The dominant (V) chord in B♭ major is F major"
            },
            {
              "id": "ex12",
              "type": "multiple-choice",
              "question": "Which enharmonic relationship exists between these scales?",
              "options": ["B major = C♭ major", "B♭ major = A# major", "Both scales are enharmonic", "No enharmonic relationship"],
              "answer": "B♭ major = A# major",
              "explanation": "B♭ major and A# major are enharmonically equivalent (same pitches, different notation)"
            }
          ]
        },
        {
          "id": "f_and_f_sharp_major_scales",
          "title": "F Major & F# Major Scales",
          "description": "Comparing flat and sharp major scales",
          "estimatedDuration": 20,
          "xpReward": 40,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple-choice",
              "question": "How many flats does F major have?",
              "options": ["0", "1", "2", "3"],
              "answer": "1",
              "explanation": "F major has one flat: B♭"
            },
            {
              "id": "ex2",
              "type": "multiple-choice",
              "question": "How many sharps does F# major have?",
              "options": ["5", "6", "7", "8"],
              "answer": "6",
              "explanation": "F# major has six sharps: F#, C#, G#, D#, A#, and E#"
            },
            {
              "id": "ex3",
              "type": "multiple-choice",
              "question": "What are the notes in F major scale?",
              "options": ["F-G-A-B♭-C-D-E", "F-G-A-B-C-D-E", "F-G-A♭-B♭-C-D-E♭", "F-G-A-B♭-C-D♭-E"],
              "answer": "F-G-A-B♭-C-D-E",
              "explanation": "F major scale: F-G-A-B♭-C-D-E (only B is flatted)"
            },
            {
              "id": "ex4",
              "type": "multiple-choice",
              "question": "What are the notes in F# major scale?",
              "options": ["F#-G#-A#-B-C#-D#-E#", "F#-G-A-B-C-D-E", "F#-G#-A-B-C#-D-E", "F-G#-A#-B-C#-D#-F"],
              "answer": "F#-G#-A#-B-C#-D#-E#",
              "explanation": "F# major scale: F#-G#-A#-B-C#-D#-E# (six sharps, all notes except B are sharped)"
            },
            {
              "id": "ex5",
              "type": "multiple-choice",
              "question": "What is the relative minor of F major?",
              "options": ["A minor", "D minor", "G minor", "C minor"],
              "answer": "D minor",
              "explanation": "D minor is the relative minor of F major (same key signature)"
            },
            {
              "id": "ex6",
              "type": "multiple-choice",
              "question": "What is the relative minor of F# major?",
              "options": ["C# minor", "D# minor", "G# minor", "A# minor"],
              "answer": "D# minor",
              "explanation": "D# minor is the relative minor of F# major (same key signature)"
            },
            {
              "id": "ex7",
              "type": "multiple-choice",
              "question": "In the circle of fifths, F major is how many steps from C major?",
              "options": ["1 step counter-clockwise", "2 steps counter-clockwise", "1 step clockwise", "3 steps counter-clockwise"],
              "answer": "1 step counter-clockwise",
              "explanation": "F major is one step counter-clockwise from C major (C→F)"
            },
            {
              "id": "ex8",
              "type": "multiple-choice",
              "question": "In the circle of fifths, F# major is how many steps from C major?",
              "options": ["5 steps clockwise", "6 steps clockwise", "7 steps clockwise", "4 steps clockwise"],
              "answer": "6 steps clockwise",
              "explanation": "F# major is six steps clockwise from C major (C→G→D→A→E→B→F#)"
            },
            {
              "id": "ex9",
              "type": "multiple-choice",
              "question": "Which scale has more accidentals: F major or F# major?",
              "options": ["F major", "F# major", "They have the same", "Neither has accidentals"],
              "answer": "F# major",
              "explanation": "F# major has 6 sharps while F major has only 1 flat"
            },
            {
              "id": "ex10",
              "type": "multiple-choice",
              "question": "What is the dominant chord in F major?",
              "options": ["B♭ major", "C major", "D minor", "G minor"],
              "answer": "C major",
              "explanation": "The dominant (V) chord in F major is C major"
            },
            {
              "id": "ex11",
              "type": "multiple-choice",
              "question": "What is the dominant chord in F# major?",
              "options": ["B major", "C# major", "D# minor", "G# minor"],
              "answer": "C# major",
              "explanation": "The dominant (V) chord in F# major is C# major"
            },
            {
              "id": "ex12",
              "type": "multiple-choice",
              "question": "Which enharmonic relationship exists between these scales?",
              "options": ["F major = E# major", "F# major = G♭ major", "Both scales are enharmonic", "No enharmonic relationship"],
              "answer": "F# major = G♭ major",
              "explanation": "F# major and G♭ major are enharmonically equivalent (same pitches, different notation)"
            }
          ]
        },
        {
          "id": "c_sharp_major_scale",
          "title": "C# Major Scale",
          "description": "Seven sharps: F#, C#, G#, D#, A#, E#, and B#",
          "estimatedDuration": 8,
          "xpReward": 16,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple-choice",
              "question": "How many sharps does C# major have?",
              "options": ["6", "7", "8", "9"],
              "answer": "7",
              "explanation": "C# major has seven sharps: all notes are sharp"
            }
          ]
        }
      ]
    };
