# Generated by Django 5.1 on 2024-08-15 21:22

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Document',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('text', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Annotation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('label', models.CharField(max_length=50)),
                ('start', models.IntegerField()),
                ('end', models.IntegerField()),
                ('annotated_text', models.CharField(max_length=255)),
                ('document', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='annotations', to='annotations.document')),
            ],
        ),
    ]
