<?php
/*
 * このソースコードは blanco Frameworkによって自動生成されています。
 */
/*. DOC <@package blanco.sample.charactergroup;>.*/

/*. require_module 'mbstring'; .*/;
/*. require_module 'standard'; .*/;

/**
 * 全角カタカナのサンプル。blancoCharacterGroupの実装には影響しません。
 */
class SampleZenKatakanaCharacterGroup {
    /**
     * 文字グループに含まれる文字であるかどうかを判定します。
     *
     * @param string $argCheck チェックを行いたい文字。
     * @return boolean 文字グループに含まれていればture。グループに含まれない文字であればfalse。
     */
    public /*.boolean.*/ function match(/*.string.*/ $argCheck) {
        /* パラメータの数、型チェックを行います。 */
        if (func_num_args() !== 1) {
            throw new Exception('[ArgumentException]: SampleZenKatakanaCharacterGroup.match のパラメータは[1]個である必要があります。しかし実際には[' . func_num_args() .  ']個のパラメータを伴って呼び出されました。');
        }
        if (gettype($argCheck) !== 'string' && gettype($argCheck) !== 'NULL') {
            throw new Exception('[ArgumentException]: SampleZenKatakanaCharacterGroup.match の1番目のパラメータは[string]型でなくてはなりません。しかし実際には[' . gettype($argCheck) . ']型が与えられました。');
        }

        // No.1
        // 説明:8340: カタカナ。ァ。
        // 0x8340 (Windows-31J)
        // 0x30a1 (UTF-16BE)
        if ($argCheck === 'ァ') {
            return true;
        }
        // No.2
        // 説明:8341: カタカナ。ア。
        // 0x8341 (Windows-31J)
        // 0x30a2 (UTF-16BE)
        if ($argCheck === 'ア') {
            return true;
        }
        // No.3
        // 説明:8342: カタカナ。ィ。
        // 0x8342 (Windows-31J)
        // 0x30a3 (UTF-16BE)
        if ($argCheck === 'ィ') {
            return true;
        }
        // No.4
        // 0x8343 (Windows-31J)
        // 0x30a4 (UTF-16BE)
        if ($argCheck === 'イ') {
            return true;
        }
        // No.5
        // 0x8344 (Windows-31J)
        // 0x30a5 (UTF-16BE)
        if ($argCheck === 'ゥ') {
            return true;
        }
        // No.6
        // 0x8345 (Windows-31J)
        // 0x30a6 (UTF-16BE)
        if ($argCheck === 'ウ') {
            return true;
        }
        // No.7
        // 0x8346 (Windows-31J)
        // 0x30a7 (UTF-16BE)
        if ($argCheck === 'ェ') {
            return true;
        }
        // No.8
        // 0x8347 (Windows-31J)
        // 0x30a8 (UTF-16BE)
        if ($argCheck === 'エ') {
            return true;
        }
        // No.9
        // 説明:8348: カタカナ。ォ。
        // 0x8348 (Windows-31J)
        // 0x30a9 (UTF-16BE)
        if ($argCheck === 'ォ') {
            return true;
        }
        // No.10
        // 説明:8349: カタカナ。オ。
        // 0x8349 (Windows-31J)
        // 0x30aa (UTF-16BE)
        if ($argCheck === 'オ') {
            return true;
        }
        // No.11
        // 説明:834a: カタカナ。カ。
        // 0x834a (Windows-31J)
        // 0x30ab (UTF-16BE)
        if ($argCheck === 'カ') {
            return true;
        }
        // No.12
        // 説明:834b: カタカナ。ガ。
        // 0x834b (Windows-31J)
        // 0x30ac (UTF-16BE)
        if ($argCheck === 'ガ') {
            return true;
        }
        // No.13
        // 0x834c (Windows-31J)
        // 0x30ad (UTF-16BE)
        if ($argCheck === 'キ') {
            return true;
        }
        // No.14
        // 説明:834d: カタカナ。ギ。
        // 0x834d (Windows-31J)
        // 0x30ae (UTF-16BE)
        if ($argCheck === 'ギ') {
            return true;
        }
        // No.15
        // 0x834e (Windows-31J)
        // 0x30af (UTF-16BE)
        if ($argCheck === 'ク') {
            return true;
        }
        // No.16
        // 説明:834f: カタカナ。グ。
        // 0x834f (Windows-31J)
        // 0x30b0 (UTF-16BE)
        if ($argCheck === 'グ') {
            return true;
        }
        // No.17
        // 0x8350 (Windows-31J)
        // 0x30b1 (UTF-16BE)
        if ($argCheck === 'ケ') {
            return true;
        }
        // No.18
        // 0x8351 (Windows-31J)
        // 0x30b2 (UTF-16BE)
        if ($argCheck === 'ゲ') {
            return true;
        }
        // No.19
        // 0x8352 (Windows-31J)
        // 0x30b3 (UTF-16BE)
        if ($argCheck === 'コ') {
            return true;
        }
        // No.20
        // 0x8353 (Windows-31J)
        // 0x30b4 (UTF-16BE)
        if ($argCheck === 'ゴ') {
            return true;
        }
        // No.21
        // 0x8354 (Windows-31J)
        // 0x30b5 (UTF-16BE)
        if ($argCheck === 'サ') {
            return true;
        }
        // No.22
        // 0x8355 (Windows-31J)
        // 0x30b6 (UTF-16BE)
        if ($argCheck === 'ザ') {
            return true;
        }
        // No.23
        // 0x8356 (Windows-31J)
        // 0x30b7 (UTF-16BE)
        if ($argCheck === 'シ') {
            return true;
        }
        // No.24
        // 0x8357 (Windows-31J)
        // 0x30b8 (UTF-16BE)
        if ($argCheck === 'ジ') {
            return true;
        }
        // No.25
        // 0x8358 (Windows-31J)
        // 0x30b9 (UTF-16BE)
        if ($argCheck === 'ス') {
            return true;
        }
        // No.26
        // 0x8359 (Windows-31J)
        // 0x30ba (UTF-16BE)
        if ($argCheck === 'ズ') {
            return true;
        }
        // No.27
        // 0x835a (Windows-31J)
        // 0x30bb (UTF-16BE)
        if ($argCheck === 'セ') {
            return true;
        }
        // No.28
        // 0x835b (Windows-31J)
        // 0x30bc (UTF-16BE)
        if ($argCheck === 'ゼ') {
            return true;
        }
        // No.29
        // 0x835c (Windows-31J)
        // 0x30bd (UTF-16BE)
        if ($argCheck === 'ソ') {
            return true;
        }
        // No.30
        // 説明:835d: カタカナ。ゾ。
        // 0x835d (Windows-31J)
        // 0x30be (UTF-16BE)
        if ($argCheck === 'ゾ') {
            return true;
        }
        // No.31
        // 0x835e (Windows-31J)
        // 0x30bf (UTF-16BE)
        if ($argCheck === 'タ') {
            return true;
        }
        // No.32
        // 説明:835f: カタカナ。ダ。
        // 0x835f (Windows-31J)
        // 0x30c0 (UTF-16BE)
        if ($argCheck === 'ダ') {
            return true;
        }
        // No.33
        // 0x8360 (Windows-31J)
        // 0x30c1 (UTF-16BE)
        if ($argCheck === 'チ') {
            return true;
        }
        // No.34
        // 0x8361 (Windows-31J)
        // 0x30c2 (UTF-16BE)
        if ($argCheck === 'ヂ') {
            return true;
        }
        // No.35
        // 説明:8362: カタカナ。ッ。
        // 0x8362 (Windows-31J)
        // 0x30c3 (UTF-16BE)
        if ($argCheck === 'ッ') {
            return true;
        }
        // No.36
        // 0x8363 (Windows-31J)
        // 0x30c4 (UTF-16BE)
        if ($argCheck === 'ツ') {
            return true;
        }
        // No.37
        // 0x8364 (Windows-31J)
        // 0x30c5 (UTF-16BE)
        if ($argCheck === 'ヅ') {
            return true;
        }
        // No.38
        // 0x8365 (Windows-31J)
        // 0x30c6 (UTF-16BE)
        if ($argCheck === 'テ') {
            return true;
        }
        // No.39
        // 0x8366 (Windows-31J)
        // 0x30c7 (UTF-16BE)
        if ($argCheck === 'デ') {
            return true;
        }
        // No.40
        // 0x8367 (Windows-31J)
        // 0x30c8 (UTF-16BE)
        if ($argCheck === 'ト') {
            return true;
        }
        // No.41
        // 0x8368 (Windows-31J)
        // 0x30c9 (UTF-16BE)
        if ($argCheck === 'ド') {
            return true;
        }
        // No.42
        // 0x8369 (Windows-31J)
        // 0x30ca (UTF-16BE)
        if ($argCheck === 'ナ') {
            return true;
        }
        // No.43
        // 0x836a (Windows-31J)
        // 0x30cb (UTF-16BE)
        if ($argCheck === 'ニ') {
            return true;
        }
        // No.44
        // 0x836b (Windows-31J)
        // 0x30cc (UTF-16BE)
        if ($argCheck === 'ヌ') {
            return true;
        }
        // No.45
        // 0x836c (Windows-31J)
        // 0x30cd (UTF-16BE)
        if ($argCheck === 'ネ') {
            return true;
        }
        // No.46
        // 0x836d (Windows-31J)
        // 0x30ce (UTF-16BE)
        if ($argCheck === 'ノ') {
            return true;
        }
        // No.47
        // 0x836e (Windows-31J)
        // 0x30cf (UTF-16BE)
        if ($argCheck === 'ハ') {
            return true;
        }
        // No.48
        // 説明:836f: カタカナ。バ。
        // 0x836f (Windows-31J)
        // 0x30d0 (UTF-16BE)
        if ($argCheck === 'バ') {
            return true;
        }
        // No.49
        // 説明:8370: カタカナ。パ。
        // 0x8370 (Windows-31J)
        // 0x30d1 (UTF-16BE)
        if ($argCheck === 'パ') {
            return true;
        }
        // No.50
        // 0x8371 (Windows-31J)
        // 0x30d2 (UTF-16BE)
        if ($argCheck === 'ヒ') {
            return true;
        }
        // No.51
        // 0x8372 (Windows-31J)
        // 0x30d3 (UTF-16BE)
        if ($argCheck === 'ビ') {
            return true;
        }
        // No.52
        // 0x8373 (Windows-31J)
        // 0x30d4 (UTF-16BE)
        if ($argCheck === 'ピ') {
            return true;
        }
        // No.53
        // 0x8374 (Windows-31J)
        // 0x30d5 (UTF-16BE)
        if ($argCheck === 'フ') {
            return true;
        }
        // No.54
        // 0x8375 (Windows-31J)
        // 0x30d6 (UTF-16BE)
        if ($argCheck === 'ブ') {
            return true;
        }
        // No.55
        // 0x8376 (Windows-31J)
        // 0x30d7 (UTF-16BE)
        if ($argCheck === 'プ') {
            return true;
        }
        // No.56
        // 0x8377 (Windows-31J)
        // 0x30d8 (UTF-16BE)
        if ($argCheck === 'ヘ') {
            return true;
        }
        // No.57
        // 0x8378 (Windows-31J)
        // 0x30d9 (UTF-16BE)
        if ($argCheck === 'ベ') {
            return true;
        }
        // No.58
        // 0x8379 (Windows-31J)
        // 0x30da (UTF-16BE)
        if ($argCheck === 'ペ') {
            return true;
        }
        // No.59
        // 0x837a (Windows-31J)
        // 0x30db (UTF-16BE)
        if ($argCheck === 'ホ') {
            return true;
        }
        // No.60
        // 説明:837b: カタカナ。ボ。
        // 0x837b (Windows-31J)
        // 0x30dc (UTF-16BE)
        if ($argCheck === 'ボ') {
            return true;
        }
        // No.61
        // 説明:837c: カタカナ。ポ。
        // 0x837c (Windows-31J)
        // 0x30dd (UTF-16BE)
        if ($argCheck === 'ポ') {
            return true;
        }
        // No.62
        // 0x837d (Windows-31J)
        // 0x30de (UTF-16BE)
        if ($argCheck === 'マ') {
            return true;
        }
        // No.63
        // 説明:837e: カタカナ。ミ。
        // 0x837e (Windows-31J)
        // 0x30df (UTF-16BE)
        if ($argCheck === 'ミ') {
            return true;
        }
        // No.64
        // 説明:8380: カタカナ。ム。837fはスキップされている模様。
        // 0x8380 (Windows-31J)
        // 0x30e0 (UTF-16BE)
        if ($argCheck === 'ム') {
            return true;
        }
        // No.65
        // 0x8381 (Windows-31J)
        // 0x30e1 (UTF-16BE)
        if ($argCheck === 'メ') {
            return true;
        }
        // No.66
        // 0x8382 (Windows-31J)
        // 0x30e2 (UTF-16BE)
        if ($argCheck === 'モ') {
            return true;
        }
        // No.67
        // 説明:8383: カタカナ。ャ。
        // 0x8383 (Windows-31J)
        // 0x30e3 (UTF-16BE)
        if ($argCheck === 'ャ') {
            return true;
        }
        // No.68
        // 説明:8384: カタカナ。ヤ。
        // 0x8384 (Windows-31J)
        // 0x30e4 (UTF-16BE)
        if ($argCheck === 'ヤ') {
            return true;
        }
        // No.69
        // 0x8385 (Windows-31J)
        // 0x30e5 (UTF-16BE)
        if ($argCheck === 'ュ') {
            return true;
        }
        // No.70
        // 0x8386 (Windows-31J)
        // 0x30e6 (UTF-16BE)
        if ($argCheck === 'ユ') {
            return true;
        }
        // No.71
        // 説明:8387: カタカナ。ョ。
        // 0x8387 (Windows-31J)
        // 0x30e7 (UTF-16BE)
        if ($argCheck === 'ョ') {
            return true;
        }
        // No.72
        // 0x8388 (Windows-31J)
        // 0x30e8 (UTF-16BE)
        if ($argCheck === 'ヨ') {
            return true;
        }
        // No.73
        // 説明:8389: カタカナ。ラ。
        // 0x8389 (Windows-31J)
        // 0x30e9 (UTF-16BE)
        if ($argCheck === 'ラ') {
            return true;
        }
        // No.74
        // 0x838a (Windows-31J)
        // 0x30ea (UTF-16BE)
        if ($argCheck === 'リ') {
            return true;
        }
        // No.75
        // 0x838b (Windows-31J)
        // 0x30eb (UTF-16BE)
        if ($argCheck === 'ル') {
            return true;
        }
        // No.76
        // 0x838c (Windows-31J)
        // 0x30ec (UTF-16BE)
        if ($argCheck === 'レ') {
            return true;
        }
        // No.77
        // 0x838d (Windows-31J)
        // 0x30ed (UTF-16BE)
        if ($argCheck === 'ロ') {
            return true;
        }
        // No.78
        // 説明:カタカナ。小さいヮ。
        // 0x838e (Windows-31J)
        // 0x30ee (UTF-16BE)
        if ($argCheck === 'ヮ') {
            return true;
        }
        // No.79
        // 説明:838f: カタカナ。ワ。
        // 0x838f (Windows-31J)
        // 0x30ef (UTF-16BE)
        if ($argCheck === 'ワ') {
            return true;
        }
        // No.80
        // 0x8390 (Windows-31J)
        // 0x30f0 (UTF-16BE)
        if ($argCheck === 'ヰ') {
            return true;
        }
        // No.81
        // 0x8391 (Windows-31J)
        // 0x30f1 (UTF-16BE)
        if ($argCheck === 'ヱ') {
            return true;
        }
        // No.82
        // 説明:8392: カタカナ。ヲ。
        // 0x8392 (Windows-31J)
        // 0x30f2 (UTF-16BE)
        if ($argCheck === 'ヲ') {
            return true;
        }
        // No.83
        // 説明:8393: カタカナ。ン。
        // 0x8393 (Windows-31J)
        // 0x30f3 (UTF-16BE)
        if ($argCheck === 'ン') {
            return true;
        }
        // No.84
        // 説明:8394: カタカナ。ヴ。
        // 0x8394 (Windows-31J)
        // 0x30f4 (UTF-16BE)
        if ($argCheck === 'ヴ') {
            return true;
        }
        // No.85
        // 0x8395 (Windows-31J)
        // 0x30f5 (UTF-16BE)
        if ($argCheck === 'ヵ') {
            return true;
        }
        // No.86
        // 説明:8396: カタカナ。ヶ。
        // 0x8396 (Windows-31J)
        // 0x30f6 (UTF-16BE)
        if ($argCheck === 'ヶ') {
            return true;
        }
        return false;
    }

    /**
     * 与えられた文字列が、全て文字グループに含まれる文字であるかどうかを判定します。
     *
     * @param string $argCheck チェックを行いたい文字列。
     * @return boolean 全ての文字が文字グループに含まれていればture。グループに含まれない文字が含まれていればfalse。
     */
    public /*.boolean.*/ function matchAll(/*.string.*/ $argCheck) {
        /* パラメータの数、型チェックを行います。 */
        if (func_num_args() !== 1) {
            throw new Exception('[ArgumentException]: SampleZenKatakanaCharacterGroup.matchAll のパラメータは[1]個である必要があります。しかし実際には[' . func_num_args() .  ']個のパラメータを伴って呼び出されました。');
        }
        if (gettype($argCheck) !== 'string' && gettype($argCheck) !== 'NULL') {
            throw new Exception('[ArgumentException]: SampleZenKatakanaCharacterGroup.matchAll の1番目のパラメータは[string]型でなくてはなりません。しかし実際には[' . gettype($argCheck) . ']型が与えられました。');
        }

        if ($argCheck === null) {
            throw new Exception('メソッド[matchAll]のパラメータ[argCheck]にnullが与えられました。しかし、このパラメータにnullを与えることはできません。');
        }

        $arraySize = mb_strlen($argCheck);
        for ($index = 0; $index < $arraySize; $index++) {
            if ($this->match(mb_substr($argCheck, $index, 1)) === false) {
                return false;
            }
        }
        return true;
    }

    /**
     * 与えられた文字列が、文字グループに含まれる文字をひとつでも含んでいるかどうかを判定します。
     *
     * @param string $argCheck チェックを行いたい文字列。
     * @return boolean 文字グループに含まれている文字をひとつでも含んでいればture。グループに含まれる文字をひとつも含まない場合はfalse。
     */
    public /*.boolean.*/ function matchAny(/*.string.*/ $argCheck) {
        /* パラメータの数、型チェックを行います。 */
        if (func_num_args() !== 1) {
            throw new Exception('[ArgumentException]: SampleZenKatakanaCharacterGroup.matchAny のパラメータは[1]個である必要があります。しかし実際には[' . func_num_args() .  ']個のパラメータを伴って呼び出されました。');
        }
        if (gettype($argCheck) !== 'string' && gettype($argCheck) !== 'NULL') {
            throw new Exception('[ArgumentException]: SampleZenKatakanaCharacterGroup.matchAny の1番目のパラメータは[string]型でなくてはなりません。しかし実際には[' . gettype($argCheck) . ']型が与えられました。');
        }

        if ($argCheck === null) {
            throw new Exception('メソッド[matchAny]のパラメータ[argCheck]にnullが与えられました。しかし、このパラメータにnullを与えることはできません。');
        }

        $arraySize = mb_strlen($argCheck);
        for ($index = 0; $index < $arraySize; $index++) {
            if ($this->match(mb_substr($argCheck, $index, 1))) {
                return true;
            }
        }
        return false;
    }
}
?>
