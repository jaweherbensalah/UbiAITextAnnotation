from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import DocumentViewSet, AnnotationViewSet,DocumentDetailView,save_document_and_annotations, save_annotations

router = DefaultRouter()
router.register(r'documents', DocumentViewSet)
router.register(r'annotations', AnnotationViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('document/<int:pk>/', DocumentDetailView.as_view(), name='document-detail'),
    path('save-annotations/', save_annotations, name='save-annotations'),
    path('save-document/', save_document_and_annotations, name='save-document'),
]

