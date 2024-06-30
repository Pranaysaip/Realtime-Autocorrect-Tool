from textblob import TextBlob

def autocorrect(text):
    blob = TextBlob(text)
    corrected_text = str(blob.correct())
    return corrected_text
