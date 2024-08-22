import { Component } from '@angular/core';
import { AnnotationService } from './annotation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  documentText: string = `
  Bachelors degree in Computer Science or related field, or equivalent industry experience

  5+ years of experience delivering solutions and support to enterprise customers
  
  2+ years of experience managing and leading highly technical teams in a fast-paced environment.
  
  Demonstrated hands-on experience on one or more of the Dynamics 365 products e.g. Dynamics Customer Engagement ( CRM ), Dynamics Finance & Operations ( ERP )
  
  Preferred: MBA Understanding of cloud computing technologies is desired - Azure Core Platform; Data Platform; SQL; Azure DB; Application development & debugging experience; Power BI; PowerApps
  
  Strong passion and focus on delivering the right customer experience Demonstrated ability to recruit and develop global teams
  
  Ability to innovate and drive change Ability to build a deep technical relationship with internal teams and customers
  
  Microsoft Cloud Background Check: This position will be required to pass the Microsoft Cloud background check upon hire/transfer and every two years thereafter.
`;

  selectedText: string = '';
  selectedLabel: string | null = null;
  newLabel: string = '';
  annotations: any[] = [];
  labels: { [key: string]: string } = {}; 
  constructor(private annotationService: AnnotationService) {}

  labelColors = [
    '#00a97f', // Tomato
    '#b73538', // SteelBlue
    '#7c4b8b', // LimeGreen
    '#774d8e', // Gold
    '#00a97f',
    '#b73538', 
    '#7c4b8b', 
    '#774d8e'
  ];

  addLabel() {
    if (this.newLabel && !this.labels[this.newLabel]) {
      const color = this.labelColors[Object.keys(this.labels).length % this.labelColors.length];
      this.labels[this.newLabel] = color;
      this.newLabel = '';
    }
  }

  selectLabel(label: string) {
    this.selectedLabel = label;
  }

  selectText(event: MouseEvent) {
    const selection = window.getSelection();
    if (selection) {
      const selectedText = selection.toString();
      if (selectedText && this.selectedLabel) {
        this.selectedText = selectedText;
        const position = this.getSelectionPosition();
        this.handleAnnotation({
          label: this.selectedLabel,
          text: selectedText,
          start: position.start,
          end: position.end
        });
        this.highlightText(selectedText, this.labels[this.selectedLabel]);
      }
    }
  }

  getSelectionPosition(): any {
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      return {
        start: range.startOffset,
        end: range.endOffset
      };
    }
    return { start: 0, end: 0 };
  }

  handleAnnotation(annotation: any) {
    this.annotations.push(annotation);
    console.log('Annotations:', this.annotations);
  }

  highlightText(selectedText: string, color: string) {
    const documentTextContainer = document.querySelector('.document-text') as HTMLElement;

    if (documentTextContainer) {
        const selectedText = window.getSelection()?.toString();
        const selectedLabel = this.selectedLabel;

        if (selectedText && selectedLabel) {
            const span = document.createElement('span');
            span.className = 'annotation';
            span.style.backgroundColor = color;
            span.style.borderRadius = '5px'; 
            span.style.padding = '4px 6px'; 

            // Create the label inside the span with a smaller size and white background
            const labelSpan = document.createElement('span');
            labelSpan.className = 'annotation-label';
            labelSpan.style.backgroundColor = 'white';
            labelSpan.style.color = 'black';
            labelSpan.style.borderRadius = '3px'; 
            labelSpan.style.padding = '1px 3px'; 
            labelSpan.style.fontSize = '0.8em'; 
            labelSpan.textContent = selectedLabel;

           
            span.textContent = selectedText + ' ';
            span.appendChild(labelSpan);
            
            
            const range = window.getSelection()?.getRangeAt(0);

            if (range) {
                range.deleteContents();
                range.insertNode(span);
            }
        }
    }
}



  exportToJson() {
    const formattedAnnotations = this.annotations.map(annotation => ({
      label: annotation.label,
      text: annotation.text,
      start: annotation.start,
      end: annotation.end
    }));

    // Prepare the data to be sent to the backend
    const data = {
      document: this.documentText,
      annotations: formattedAnnotations
    };
  
  console.log('Data to be sent to backend:', data);


  this.annotationService.saveDocumentAndAnnotations(data).subscribe(
    (response: any) => {
      console.log('Data saved successfully:', response);
    },
    (error: any) => {
      console.error('Error saving data:', error);
    }
  );
   
    const jsonData = JSON.stringify(data, null, 2);
    this.downloadJsonFile(jsonData, 'annotations.json');
  }

  downloadJsonFile(jsonData: string, filename: string) {
    const blob = new Blob([jsonData], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    window.URL.revokeObjectURL(url);
  }
}