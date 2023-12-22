function textToBinary(text) {
            return text.split('').map(function(char) {
                return char.charCodeAt(0).toString(2).padStart(8, '0');
            }).join(' ');
        }

        function binaryToText(binary) {
            return binary.split(' ').map(function(bin) {
                return String.fromCharCode(parseInt(bin, 2));
            }).join('');
        }

        function convertToBinary() {
            var text = document.getElementById('textInput').value;
            var binary = textToBinary(text);
            document.getElementById('result').innerText = binary;
        }

        function convertToText() {
            var binary = document.getElementById('textInput').value;
            var text = binaryToText(binary);
            document.getElementById('result').innerText = text;
        }