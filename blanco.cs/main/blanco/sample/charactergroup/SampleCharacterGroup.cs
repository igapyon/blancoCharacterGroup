// このソースコードは blanco Frameworkによって自動生成されています。
using System;

namespace blanco.sample.charactergroup
{
    /// <summary>文字グループのサンプル。このクラスは単にサンプルです。実際の動作には利用されません。</summary>
    public class SampleCharacterGroup
    {
        /// <summary>文字グループに含まれる文字であるかどうかを判定します。</summary>
        /// <param name="argCheck">チェックを行いたい文字。</param>
        /// <returns>文字グループに含まれていればture。グループに含まれない文字であればfalse。</returns>
        public virtual bool Match(char argCheck)
        {
            // No.1
            // 説明:0の文字
            // 0x30 (Windows-31J)
            // 0x0030 (UTF-16BE)
            if (argCheck == '0') {
                return true;
            }
            // No.2
            // 説明:1の文字
            // 0x31 (Windows-31J)
            // 0x0031 (UTF-16BE)
            if (argCheck == '1') {
                return true;
            }
            // No.3
            // 説明:2の文字
            // 0x32 (Windows-31J)
            // 0x0032 (UTF-16BE)
            if (argCheck == '2') {
                return true;
            }
            // No.4
            // 説明:3の文字
            // 0x33 (Windows-31J)
            // 0x0033 (UTF-16BE)
            if (argCheck == '3') {
                return true;
            }
            // No.5
            // 説明:4の文字
            // 0x34 (Windows-31J)
            // 0x0034 (UTF-16BE)
            if (argCheck == '4') {
                return true;
            }
            // No.6
            // 説明:5の文字
            // 0x35 (Windows-31J)
            // 0x0035 (UTF-16BE)
            if (argCheck == '5') {
                return true;
            }
            // No.7
            // 説明:6の文字
            // 0x36 (Windows-31J)
            // 0x0036 (UTF-16BE)
            if (argCheck == '6') {
                return true;
            }
            // No.8
            // 説明:7の文字
            // 0x37 (Windows-31J)
            // 0x0037 (UTF-16BE)
            if (argCheck == '7') {
                return true;
            }
            // No.9
            // 説明:8の文字
            // 0x38 (Windows-31J)
            // 0x0038 (UTF-16BE)
            if (argCheck == '8') {
                return true;
            }
            // No.10
            // 説明:9の文字
            // 0x39 (Windows-31J)
            // 0x0039 (UTF-16BE)
            if (argCheck == '9') {
                return true;
            }
            // No.11
            // 説明:シングルクオートが展開されることの確認。
            // 0x27 (Windows-31J)
            // 0x0027 (UTF-16BE)
            if (argCheck == '\'') {
                return true;
            }
            // No.12
            // 説明:ダブルクオートが展開されることの確認。
            // 0x22 (Windows-31J)
            // 0x0022 (UTF-16BE)
            if (argCheck == '\"') {
                return true;
            }
            // No.13
            // 説明:バックスラッシュが展開されることの確認。
            // 0x5c (Windows-31J)
            // 0x005c (UTF-16BE)
            if (argCheck == '\\') {
                return true;
            }
            // No.14
            // 説明:JExcelApi 2.6のオリジナル版において正常に×として展開できない文字。
            // 0x817e (Windows-31J)
            // 0x00d7 (UTF-16BE)
            if (argCheck == '×') {
                return true;
            }
            return false;
        }

        /// <summary>与えられた文字列が、全て文字グループに含まれる文字であるかどうかを判定します。</summary>
        /// <param name="argCheck">チェックを行いたい文字列。</param>
        /// <returns>全ての文字が文字グループに含まれていればture。グループに含まれない文字が含まれていればfalse。</returns>
        public virtual bool MatchAll(string argCheck)
        {
            if (argCheck == null) {
                throw new ArgumentException("メソッド[MatchAll]のパラメータ[argCheck]にnullが与えられました。しかし、このパラメータにnullを与えることはできません。");
            }

            char[] arrayArg = argCheck.ToCharArray();
            int arraySize = arrayArg.Length;
            for (int index = 0; index < arraySize; index++) {
                if (Match(arrayArg[index]) == false) {
                    return false;
                }
            }
            return true;
        }

        /// <summary>与えられた文字列が、文字グループに含まれる文字をひとつでも含んでいるかどうかを判定します。</summary>
        /// <param name="argCheck">チェックを行いたい文字列。</param>
        /// <returns>文字グループに含まれている文字をひとつでも含んでいればture。グループに含まれる文字をひとつも含まない場合はfalse。</returns>
        public virtual bool MatchAny(string argCheck)
        {
            if (argCheck == null) {
                throw new ArgumentException("メソッド[MatchAny]のパラメータ[argCheck]にnullが与えられました。しかし、このパラメータにnullを与えることはできません。");
            }

            char[] arrayArg = argCheck.ToCharArray();
            int arraySize = arrayArg.Length;
            for (int index = 0; index < arraySize; index++) {
                if (Match(arrayArg[index])) {
                    return true;
                }
            }
            return false;
        }
    }
}
