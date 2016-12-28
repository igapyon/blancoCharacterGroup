/*
 * ���̃\�[�X�R�[�h�� blanco Framework�ɂ���Ď�����������Ă��܂��B
 */
package blanco.charactergroup.task;

import java.io.IOException;

import blanco.charactergroup.task.valueobject.BlancoCharacterGroupProcessInput;

/**
 * ���� [BlancoCharacterGroupProcess]�C���^�t�F�[�X�B
 *
 * ���̃C���^�t�F�[�X���p������ [blanco.charactergroup.task]�p�b�P�[�W��[BlancoCharacterGroupProcess]�N���X���쐬���Ď��ۂ̃o�b�`�������������Ă��������B<br>
 */
interface BlancoCharacterGroupProcess {
    /**
     * �N���X���C���X�^���X�����ď��������s����ۂ̃G���g���|�C���g�ł��B
     *
     * @param input �����̓��̓p�����[�^�B
     * @return �����̎��s���ʁB
     * @throws IOException ���o�͗�O�����������ꍇ�B
     * @throws IllegalArgumentException ���͒l�ɕs�������������ꍇ�B
     */
    int execute(final BlancoCharacterGroupProcessInput input) throws IOException, IllegalArgumentException;
}
