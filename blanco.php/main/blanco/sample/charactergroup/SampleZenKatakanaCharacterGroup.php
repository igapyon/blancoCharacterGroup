<?php
/*
 * ���̃\�[�X�R�[�h�� blanco Framework�ɂ���Ď�����������Ă��܂��B
 */
/*. DOC <@package blanco.sample.charactergroup;>.*/

/*. require_module 'mbstring'; .*/;
/*. require_module 'standard'; .*/;

/**
 * �S�p�J�^�J�i�̃T���v���BblancoCharacterGroup�̎����ɂ͉e�����܂���B
 */
class SampleZenKatakanaCharacterGroup {
    /**
     * �����O���[�v�Ɋ܂܂�镶���ł��邩�ǂ����𔻒肵�܂��B
     *
     * @param string $argCheck �`�F�b�N���s�����������B
     * @return boolean �����O���[�v�Ɋ܂܂�Ă����ture�B�O���[�v�Ɋ܂܂�Ȃ������ł����false�B
     */
    public /*.boolean.*/ function match(/*.string.*/ $argCheck) {
        /* �p�����[�^�̐��A�^�`�F�b�N���s���܂��B */
        if (func_num_args() !== 1) {
            throw new Exception('[ArgumentException]: SampleZenKatakanaCharacterGroup.match �̃p�����[�^��[1]�ł���K�v������܂��B���������ۂɂ�[' . func_num_args() .  ']�̃p�����[�^�𔺂��ČĂяo����܂����B');
        }
        if (gettype($argCheck) !== 'string' && gettype($argCheck) !== 'NULL') {
            throw new Exception('[ArgumentException]: SampleZenKatakanaCharacterGroup.match ��1�Ԗڂ̃p�����[�^��[string]�^�łȂ��Ă͂Ȃ�܂���B���������ۂɂ�[' . gettype($argCheck) . ']�^���^�����܂����B');
        }

        // No.1
        // ����:8340: �J�^�J�i�B�@�B
        // 0x8340 (Windows-31J)
        // 0x30a1 (UTF-16BE)
        if ($argCheck === '�@') {
            return true;
        }
        // No.2
        // ����:8341: �J�^�J�i�B�A�B
        // 0x8341 (Windows-31J)
        // 0x30a2 (UTF-16BE)
        if ($argCheck === '�A') {
            return true;
        }
        // No.3
        // ����:8342: �J�^�J�i�B�B�B
        // 0x8342 (Windows-31J)
        // 0x30a3 (UTF-16BE)
        if ($argCheck === '�B') {
            return true;
        }
        // No.4
        // 0x8343 (Windows-31J)
        // 0x30a4 (UTF-16BE)
        if ($argCheck === '�C') {
            return true;
        }
        // No.5
        // 0x8344 (Windows-31J)
        // 0x30a5 (UTF-16BE)
        if ($argCheck === '�D') {
            return true;
        }
        // No.6
        // 0x8345 (Windows-31J)
        // 0x30a6 (UTF-16BE)
        if ($argCheck === '�E') {
            return true;
        }
        // No.7
        // 0x8346 (Windows-31J)
        // 0x30a7 (UTF-16BE)
        if ($argCheck === '�F') {
            return true;
        }
        // No.8
        // 0x8347 (Windows-31J)
        // 0x30a8 (UTF-16BE)
        if ($argCheck === '�G') {
            return true;
        }
        // No.9
        // ����:8348: �J�^�J�i�B�H�B
        // 0x8348 (Windows-31J)
        // 0x30a9 (UTF-16BE)
        if ($argCheck === '�H') {
            return true;
        }
        // No.10
        // ����:8349: �J�^�J�i�B�I�B
        // 0x8349 (Windows-31J)
        // 0x30aa (UTF-16BE)
        if ($argCheck === '�I') {
            return true;
        }
        // No.11
        // ����:834a: �J�^�J�i�B�J�B
        // 0x834a (Windows-31J)
        // 0x30ab (UTF-16BE)
        if ($argCheck === '�J') {
            return true;
        }
        // No.12
        // ����:834b: �J�^�J�i�B�K�B
        // 0x834b (Windows-31J)
        // 0x30ac (UTF-16BE)
        if ($argCheck === '�K') {
            return true;
        }
        // No.13
        // 0x834c (Windows-31J)
        // 0x30ad (UTF-16BE)
        if ($argCheck === '�L') {
            return true;
        }
        // No.14
        // ����:834d: �J�^�J�i�B�M�B
        // 0x834d (Windows-31J)
        // 0x30ae (UTF-16BE)
        if ($argCheck === '�M') {
            return true;
        }
        // No.15
        // 0x834e (Windows-31J)
        // 0x30af (UTF-16BE)
        if ($argCheck === '�N') {
            return true;
        }
        // No.16
        // ����:834f: �J�^�J�i�B�O�B
        // 0x834f (Windows-31J)
        // 0x30b0 (UTF-16BE)
        if ($argCheck === '�O') {
            return true;
        }
        // No.17
        // 0x8350 (Windows-31J)
        // 0x30b1 (UTF-16BE)
        if ($argCheck === '�P') {
            return true;
        }
        // No.18
        // 0x8351 (Windows-31J)
        // 0x30b2 (UTF-16BE)
        if ($argCheck === '�Q') {
            return true;
        }
        // No.19
        // 0x8352 (Windows-31J)
        // 0x30b3 (UTF-16BE)
        if ($argCheck === '�R') {
            return true;
        }
        // No.20
        // 0x8353 (Windows-31J)
        // 0x30b4 (UTF-16BE)
        if ($argCheck === '�S') {
            return true;
        }
        // No.21
        // 0x8354 (Windows-31J)
        // 0x30b5 (UTF-16BE)
        if ($argCheck === '�T') {
            return true;
        }
        // No.22
        // 0x8355 (Windows-31J)
        // 0x30b6 (UTF-16BE)
        if ($argCheck === '�U') {
            return true;
        }
        // No.23
        // 0x8356 (Windows-31J)
        // 0x30b7 (UTF-16BE)
        if ($argCheck === '�V') {
            return true;
        }
        // No.24
        // 0x8357 (Windows-31J)
        // 0x30b8 (UTF-16BE)
        if ($argCheck === '�W') {
            return true;
        }
        // No.25
        // 0x8358 (Windows-31J)
        // 0x30b9 (UTF-16BE)
        if ($argCheck === '�X') {
            return true;
        }
        // No.26
        // 0x8359 (Windows-31J)
        // 0x30ba (UTF-16BE)
        if ($argCheck === '�Y') {
            return true;
        }
        // No.27
        // 0x835a (Windows-31J)
        // 0x30bb (UTF-16BE)
        if ($argCheck === '�Z') {
            return true;
        }
        // No.28
        // 0x835b (Windows-31J)
        // 0x30bc (UTF-16BE)
        if ($argCheck === '�[') {
            return true;
        }
        // No.29
        // 0x835c (Windows-31J)
        // 0x30bd (UTF-16BE)
        if ($argCheck === '�\') {
            return true;
        }
        // No.30
        // ����:835d: �J�^�J�i�B�]�B
        // 0x835d (Windows-31J)
        // 0x30be (UTF-16BE)
        if ($argCheck === '�]') {
            return true;
        }
        // No.31
        // 0x835e (Windows-31J)
        // 0x30bf (UTF-16BE)
        if ($argCheck === '�^') {
            return true;
        }
        // No.32
        // ����:835f: �J�^�J�i�B�_�B
        // 0x835f (Windows-31J)
        // 0x30c0 (UTF-16BE)
        if ($argCheck === '�_') {
            return true;
        }
        // No.33
        // 0x8360 (Windows-31J)
        // 0x30c1 (UTF-16BE)
        if ($argCheck === '�`') {
            return true;
        }
        // No.34
        // 0x8361 (Windows-31J)
        // 0x30c2 (UTF-16BE)
        if ($argCheck === '�a') {
            return true;
        }
        // No.35
        // ����:8362: �J�^�J�i�B�b�B
        // 0x8362 (Windows-31J)
        // 0x30c3 (UTF-16BE)
        if ($argCheck === '�b') {
            return true;
        }
        // No.36
        // 0x8363 (Windows-31J)
        // 0x30c4 (UTF-16BE)
        if ($argCheck === '�c') {
            return true;
        }
        // No.37
        // 0x8364 (Windows-31J)
        // 0x30c5 (UTF-16BE)
        if ($argCheck === '�d') {
            return true;
        }
        // No.38
        // 0x8365 (Windows-31J)
        // 0x30c6 (UTF-16BE)
        if ($argCheck === '�e') {
            return true;
        }
        // No.39
        // 0x8366 (Windows-31J)
        // 0x30c7 (UTF-16BE)
        if ($argCheck === '�f') {
            return true;
        }
        // No.40
        // 0x8367 (Windows-31J)
        // 0x30c8 (UTF-16BE)
        if ($argCheck === '�g') {
            return true;
        }
        // No.41
        // 0x8368 (Windows-31J)
        // 0x30c9 (UTF-16BE)
        if ($argCheck === '�h') {
            return true;
        }
        // No.42
        // 0x8369 (Windows-31J)
        // 0x30ca (UTF-16BE)
        if ($argCheck === '�i') {
            return true;
        }
        // No.43
        // 0x836a (Windows-31J)
        // 0x30cb (UTF-16BE)
        if ($argCheck === '�j') {
            return true;
        }
        // No.44
        // 0x836b (Windows-31J)
        // 0x30cc (UTF-16BE)
        if ($argCheck === '�k') {
            return true;
        }
        // No.45
        // 0x836c (Windows-31J)
        // 0x30cd (UTF-16BE)
        if ($argCheck === '�l') {
            return true;
        }
        // No.46
        // 0x836d (Windows-31J)
        // 0x30ce (UTF-16BE)
        if ($argCheck === '�m') {
            return true;
        }
        // No.47
        // 0x836e (Windows-31J)
        // 0x30cf (UTF-16BE)
        if ($argCheck === '�n') {
            return true;
        }
        // No.48
        // ����:836f: �J�^�J�i�B�o�B
        // 0x836f (Windows-31J)
        // 0x30d0 (UTF-16BE)
        if ($argCheck === '�o') {
            return true;
        }
        // No.49
        // ����:8370: �J�^�J�i�B�p�B
        // 0x8370 (Windows-31J)
        // 0x30d1 (UTF-16BE)
        if ($argCheck === '�p') {
            return true;
        }
        // No.50
        // 0x8371 (Windows-31J)
        // 0x30d2 (UTF-16BE)
        if ($argCheck === '�q') {
            return true;
        }
        // No.51
        // 0x8372 (Windows-31J)
        // 0x30d3 (UTF-16BE)
        if ($argCheck === '�r') {
            return true;
        }
        // No.52
        // 0x8373 (Windows-31J)
        // 0x30d4 (UTF-16BE)
        if ($argCheck === '�s') {
            return true;
        }
        // No.53
        // 0x8374 (Windows-31J)
        // 0x30d5 (UTF-16BE)
        if ($argCheck === '�t') {
            return true;
        }
        // No.54
        // 0x8375 (Windows-31J)
        // 0x30d6 (UTF-16BE)
        if ($argCheck === '�u') {
            return true;
        }
        // No.55
        // 0x8376 (Windows-31J)
        // 0x30d7 (UTF-16BE)
        if ($argCheck === '�v') {
            return true;
        }
        // No.56
        // 0x8377 (Windows-31J)
        // 0x30d8 (UTF-16BE)
        if ($argCheck === '�w') {
            return true;
        }
        // No.57
        // 0x8378 (Windows-31J)
        // 0x30d9 (UTF-16BE)
        if ($argCheck === '�x') {
            return true;
        }
        // No.58
        // 0x8379 (Windows-31J)
        // 0x30da (UTF-16BE)
        if ($argCheck === '�y') {
            return true;
        }
        // No.59
        // 0x837a (Windows-31J)
        // 0x30db (UTF-16BE)
        if ($argCheck === '�z') {
            return true;
        }
        // No.60
        // ����:837b: �J�^�J�i�B�{�B
        // 0x837b (Windows-31J)
        // 0x30dc (UTF-16BE)
        if ($argCheck === '�{') {
            return true;
        }
        // No.61
        // ����:837c: �J�^�J�i�B�|�B
        // 0x837c (Windows-31J)
        // 0x30dd (UTF-16BE)
        if ($argCheck === '�|') {
            return true;
        }
        // No.62
        // 0x837d (Windows-31J)
        // 0x30de (UTF-16BE)
        if ($argCheck === '�}') {
            return true;
        }
        // No.63
        // ����:837e: �J�^�J�i�B�~�B
        // 0x837e (Windows-31J)
        // 0x30df (UTF-16BE)
        if ($argCheck === '�~') {
            return true;
        }
        // No.64
        // ����:8380: �J�^�J�i�B���B837f�̓X�L�b�v����Ă���͗l�B
        // 0x8380 (Windows-31J)
        // 0x30e0 (UTF-16BE)
        if ($argCheck === '��') {
            return true;
        }
        // No.65
        // 0x8381 (Windows-31J)
        // 0x30e1 (UTF-16BE)
        if ($argCheck === '��') {
            return true;
        }
        // No.66
        // 0x8382 (Windows-31J)
        // 0x30e2 (UTF-16BE)
        if ($argCheck === '��') {
            return true;
        }
        // No.67
        // ����:8383: �J�^�J�i�B���B
        // 0x8383 (Windows-31J)
        // 0x30e3 (UTF-16BE)
        if ($argCheck === '��') {
            return true;
        }
        // No.68
        // ����:8384: �J�^�J�i�B���B
        // 0x8384 (Windows-31J)
        // 0x30e4 (UTF-16BE)
        if ($argCheck === '��') {
            return true;
        }
        // No.69
        // 0x8385 (Windows-31J)
        // 0x30e5 (UTF-16BE)
        if ($argCheck === '��') {
            return true;
        }
        // No.70
        // 0x8386 (Windows-31J)
        // 0x30e6 (UTF-16BE)
        if ($argCheck === '��') {
            return true;
        }
        // No.71
        // ����:8387: �J�^�J�i�B���B
        // 0x8387 (Windows-31J)
        // 0x30e7 (UTF-16BE)
        if ($argCheck === '��') {
            return true;
        }
        // No.72
        // 0x8388 (Windows-31J)
        // 0x30e8 (UTF-16BE)
        if ($argCheck === '��') {
            return true;
        }
        // No.73
        // ����:8389: �J�^�J�i�B���B
        // 0x8389 (Windows-31J)
        // 0x30e9 (UTF-16BE)
        if ($argCheck === '��') {
            return true;
        }
        // No.74
        // 0x838a (Windows-31J)
        // 0x30ea (UTF-16BE)
        if ($argCheck === '��') {
            return true;
        }
        // No.75
        // 0x838b (Windows-31J)
        // 0x30eb (UTF-16BE)
        if ($argCheck === '��') {
            return true;
        }
        // No.76
        // 0x838c (Windows-31J)
        // 0x30ec (UTF-16BE)
        if ($argCheck === '��') {
            return true;
        }
        // No.77
        // 0x838d (Windows-31J)
        // 0x30ed (UTF-16BE)
        if ($argCheck === '��') {
            return true;
        }
        // No.78
        // ����:�J�^�J�i�B���������B
        // 0x838e (Windows-31J)
        // 0x30ee (UTF-16BE)
        if ($argCheck === '��') {
            return true;
        }
        // No.79
        // ����:838f: �J�^�J�i�B���B
        // 0x838f (Windows-31J)
        // 0x30ef (UTF-16BE)
        if ($argCheck === '��') {
            return true;
        }
        // No.80
        // 0x8390 (Windows-31J)
        // 0x30f0 (UTF-16BE)
        if ($argCheck === '��') {
            return true;
        }
        // No.81
        // 0x8391 (Windows-31J)
        // 0x30f1 (UTF-16BE)
        if ($argCheck === '��') {
            return true;
        }
        // No.82
        // ����:8392: �J�^�J�i�B���B
        // 0x8392 (Windows-31J)
        // 0x30f2 (UTF-16BE)
        if ($argCheck === '��') {
            return true;
        }
        // No.83
        // ����:8393: �J�^�J�i�B���B
        // 0x8393 (Windows-31J)
        // 0x30f3 (UTF-16BE)
        if ($argCheck === '��') {
            return true;
        }
        // No.84
        // ����:8394: �J�^�J�i�B���B
        // 0x8394 (Windows-31J)
        // 0x30f4 (UTF-16BE)
        if ($argCheck === '��') {
            return true;
        }
        // No.85
        // 0x8395 (Windows-31J)
        // 0x30f5 (UTF-16BE)
        if ($argCheck === '��') {
            return true;
        }
        // No.86
        // ����:8396: �J�^�J�i�B���B
        // 0x8396 (Windows-31J)
        // 0x30f6 (UTF-16BE)
        if ($argCheck === '��') {
            return true;
        }
        return false;
    }

    /**
     * �^����ꂽ�����񂪁A�S�ĕ����O���[�v�Ɋ܂܂�镶���ł��邩�ǂ����𔻒肵�܂��B
     *
     * @param string $argCheck �`�F�b�N���s������������B
     * @return boolean �S�Ă̕����������O���[�v�Ɋ܂܂�Ă����ture�B�O���[�v�Ɋ܂܂�Ȃ��������܂܂�Ă����false�B
     */
    public /*.boolean.*/ function matchAll(/*.string.*/ $argCheck) {
        /* �p�����[�^�̐��A�^�`�F�b�N���s���܂��B */
        if (func_num_args() !== 1) {
            throw new Exception('[ArgumentException]: SampleZenKatakanaCharacterGroup.matchAll �̃p�����[�^��[1]�ł���K�v������܂��B���������ۂɂ�[' . func_num_args() .  ']�̃p�����[�^�𔺂��ČĂяo����܂����B');
        }
        if (gettype($argCheck) !== 'string' && gettype($argCheck) !== 'NULL') {
            throw new Exception('[ArgumentException]: SampleZenKatakanaCharacterGroup.matchAll ��1�Ԗڂ̃p�����[�^��[string]�^�łȂ��Ă͂Ȃ�܂���B���������ۂɂ�[' . gettype($argCheck) . ']�^���^�����܂����B');
        }

        if ($argCheck === null) {
            throw new Exception('���\�b�h[matchAll]�̃p�����[�^[argCheck]��null���^�����܂����B�������A���̃p�����[�^��null��^���邱�Ƃ͂ł��܂���B');
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
     * �^����ꂽ�����񂪁A�����O���[�v�Ɋ܂܂�镶�����ЂƂł��܂�ł��邩�ǂ����𔻒肵�܂��B
     *
     * @param string $argCheck �`�F�b�N���s������������B
     * @return boolean �����O���[�v�Ɋ܂܂�Ă��镶�����ЂƂł��܂�ł����ture�B�O���[�v�Ɋ܂܂�镶�����ЂƂ��܂܂Ȃ��ꍇ��false�B
     */
    public /*.boolean.*/ function matchAny(/*.string.*/ $argCheck) {
        /* �p�����[�^�̐��A�^�`�F�b�N���s���܂��B */
        if (func_num_args() !== 1) {
            throw new Exception('[ArgumentException]: SampleZenKatakanaCharacterGroup.matchAny �̃p�����[�^��[1]�ł���K�v������܂��B���������ۂɂ�[' . func_num_args() .  ']�̃p�����[�^�𔺂��ČĂяo����܂����B');
        }
        if (gettype($argCheck) !== 'string' && gettype($argCheck) !== 'NULL') {
            throw new Exception('[ArgumentException]: SampleZenKatakanaCharacterGroup.matchAny ��1�Ԗڂ̃p�����[�^��[string]�^�łȂ��Ă͂Ȃ�܂���B���������ۂɂ�[' . gettype($argCheck) . ']�^���^�����܂����B');
        }

        if ($argCheck === null) {
            throw new Exception('���\�b�h[matchAny]�̃p�����[�^[argCheck]��null���^�����܂����B�������A���̃p�����[�^��null��^���邱�Ƃ͂ł��܂���B');
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
