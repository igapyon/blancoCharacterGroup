/*
 * このソースコードは blanco Frameworkによって自動生成されています。
 */
package blanco.charactergroup.task;

import java.io.IOException;

import blanco.charactergroup.task.valueobject.BlancoCharacterGroupProcessInput;

/**
 * 処理 [BlancoCharacterGroupProcess]インタフェース。
 *
 * このインタフェースを継承して [blanco.charactergroup.task]パッケージに[BlancoCharacterGroupProcess]クラスを作成して実際のバッチ処理を実装してください。<br>
 */
interface BlancoCharacterGroupProcess {
    /**
     * クラスをインスタンス化して処理を実行する際のエントリポイントです。
     *
     * @param input 処理の入力パラメータ。
     * @return 処理の実行結果。
     * @throws IOException 入出力例外が発生した場合。
     * @throws IllegalArgumentException 入力値に不正が見つかった場合。
     */
    int execute(final BlancoCharacterGroupProcessInput input) throws IOException, IllegalArgumentException;
}
