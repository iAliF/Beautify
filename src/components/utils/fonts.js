const from = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

class Font {
    constructor(font) {
        this.font = font
        this.length = font.length
    }

    beautify (text) {
        let newText = ""

        for (const c of text) {
            if (from.includes(c)) {
                let index = from.indexOf(c)

                if (index < length) {
                    newText += this.font[from.indexOf()]
                    continue
                }
            }

            newText += c;
        }

        return newText
    }
}

fetch("fonts.json")
.then(resp => resp.json())
.then(

)