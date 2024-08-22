from rest_framework import viewsets,status,generics
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Document, Annotation
from .serializers import DocumentSerializer, AnnotationSerializer



class DocumentDetailView(generics.RetrieveAPIView):
    queryset = Document.objects.all()
    serializer_class = DocumentSerializer

@api_view(['POST'])
def save_annotations(request):
    data = request.data
    document_id = data.get('documentId')
    annotations = data.get('annotations', [])
    
    if not document_id:
        return Response({'error': 'Document ID is required'}, status=400)

    document = Document.objects.filter(id=document_id).first()
    if not document:
        return Response({'error': 'Document not found'}, status=404)
    
    for ann in annotations:
        Annotation.objects.create(
            document=document,
            label=ann['label'],
            start=ann['start'],
            end=ann['end'],
            annotated_text=ann['document']
        )
    
    return Response({'status': 'Annotations saved successfully'})



@api_view(['POST'])
def save_document_and_annotations(request):
    data = request.data
    text = data.get('document')
    annotations = data.get('annotations', [])

    if not text:
        return Response({'error': 'Document text is required'}, status=status.HTTP_400_BAD_REQUEST)
    
    document, created = Document.objects.get_or_create(text=text)
    
    if not created:
        Annotation.objects.filter(document=document).delete()
    
    # Create annotations
    for ann in annotations:
        Annotation.objects.create(
            document=document,
            label=ann['label'],
            start=ann['start'],
            end=ann['end'],
            annotated_text=ann['text']
        )
    
    return Response({'status': 'Document and annotations saved successfully'}, status=status.HTTP_201_CREATED)

    

class DocumentViewSet(viewsets.ModelViewSet):
    queryset = Document.objects.all()
    serializer_class = DocumentSerializer

class AnnotationViewSet(viewsets.ModelViewSet):
    queryset = Annotation.objects.all()
    serializer_class = AnnotationSerializer
