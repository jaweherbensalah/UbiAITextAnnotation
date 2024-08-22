from django.contrib import admin
from .models import Document, Annotation

# class AnnotationInline(admin.TabularInline):
#     model = Annotation
#     extra = 1

@admin.register(Document)
class DocumentAdmin(admin.ModelAdmin):
    list_display = ("text",)

@admin.register(Annotation)
class AnnotationAdmin(admin.ModelAdmin):
    list_display = ('document', 'label', 'start', 'end', 'annotated_text')
