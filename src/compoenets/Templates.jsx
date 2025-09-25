 

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Using jsonplaceholder as a free mock API for demonstration
const API_URL = 'https://jsonplaceholder.typicode.com/posts';

const Templates = () => {
  const [templates, setTemplates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();


  useEffect(() => {
    axios.get(API_URL)
      .then(res => {
        // Map the mock data to fit the template structure
        // We'll use userId as category, title as title, body as description
        const mapped = res.data.map(item => ({
          id: item.id,
          title: item.title,
          description: item.body,
          category: `Category ${item.userId}`
        }));
        setTemplates(mapped);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to fetch templates');
        setLoading(false);
      });
  }, []);

  // Group templates by category
  const groupedByCategory = templates.reduce((acc, template) => {
    const cat = template.category || 'Uncategorized';
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(template);
    return acc;
  }, {});

  const handleTemplateClick = (template) => {
    navigate(`/editor/${template.id}`, { state: { template } });
  };

  if (loading) return <div>Loading templates...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="templates-section" style={{ padding: '32px', maxWidth: '1200px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '24px', textAlign: 'center' }}>Templates</h2>
      {Object.keys(groupedByCategory).map(category => (
        <div key={category} className="template-category" style={{ marginBottom: '32px' }}>
          <h3 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '16px', color: '#2d3748' }}>{category}</h3>
          <div className="template-list" style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
            {groupedByCategory[category].map(template => (
              <div
                key={template.id}
                className="template-card"
                onClick={() => handleTemplateClick(template)}
                style={{
                  cursor: 'pointer',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
                  margin: '0',
                  padding: '20px',
                  borderRadius: '12px',
                  background: '#fff',
                  width: '300px',
                  transition: 'transform 0.15s, box-shadow 0.15s',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
                onMouseOver={e => {
                  e.currentTarget.style.transform = 'translateY(-4px) scale(1.03)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.13)';
                }}
                onMouseOut={e => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.07)';
                }}
              >
                <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '10px', color: '#1a202c' }}>{template.title}</h4>
                <p style={{ color: '#4a5568', marginBottom: '16px', flex: 1 }}>{template.description}</p>
                <button style={{
                  background: '#3182ce',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '6px',
                  padding: '8px 16px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  alignSelf: 'flex-end',
                  marginTop: 'auto',
                  transition: 'background 0.15s',
                }}>Open in Editor</button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Templates;
