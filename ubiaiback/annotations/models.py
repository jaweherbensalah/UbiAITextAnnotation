from django.db import models

class Document(models.Model):
    text = models.TextField()

    def __str__(self) -> str:
        return self.text[:10]


class Annotation(models.Model):
    document = models.ForeignKey(Document, related_name='annotations', on_delete=models.CASCADE)
    label = models.CharField(max_length=50)
    start = models.IntegerField()
    end = models.IntegerField()
    annotated_text = models.CharField(max_length=255)

    def __str__(self) -> str:
        return f"Annotation {self.label} for Document {self.document.id}"