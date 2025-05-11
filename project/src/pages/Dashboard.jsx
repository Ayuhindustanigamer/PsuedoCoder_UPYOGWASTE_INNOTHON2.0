import React, { useState } from 'react';
import styled from 'styled-components';
import { FiPlus, FiTrash2, FiEdit2 } from 'react-icons/fi';
import { Container, Section } from '../components/common/Container';
import { Form, FormGroup, FormRow, Label, Input, Select, Textarea, SuccessMessage } from '../components/common/Form';
import { PrimaryButton, OutlineButton, TextButton } from '../components/common/Button';
import { WasteCard } from '../components/common/Card';
import { useAuth } from '../contexts/AuthContext';
import { useWaste } from '../contexts/WasteContext';

const DashboardSection = styled(Section)`
  padding-top: 100px;
`;

const DashboardHeader = styled.div`
  margin-bottom: var(--space-xl);
`;

const DashboardTitle = styled.h1`
  margin-bottom: var(--space-sm);
`;

const DashboardSubtitle = styled.p`
  color: var(--color-text-secondary);
`;

const DashboardContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-xl);
  
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const FormSection = styled.div`
  background-color: var(--color-background-light);
  border-radius: var(--border-radius-md);
  padding: var(--space-lg);
  box-shadow: var(--shadow-md);
`;

const FormTitle = styled.h2`
  margin-bottom: var(--space-lg);
  color: var(--color-primary);
`;

const ItemsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
`;

const NoItems = styled.div`
  text-align: center;
  padding: var(--space-xl);
  background-color: var(--color-background-off);
  border-radius: var(--border-radius-md);
  color: var(--color-text-tertiary);
`;

const SubmitSection = styled.div`
  margin-top: var(--space-xl);
  padding: var(--space-lg);
  background-color: var(--color-background-light);
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-md);
  text-align: center;
  
  h3 {
    margin-bottom: var(--space-md);
  }
  
  p {
    margin-bottom: var(--space-lg);
    color: var(--color-text-secondary);
  }
`;

const Dashboard = () => {
  const { currentUser } = useAuth();
  const { wasteItems, addWasteItem, updateWasteItem, deleteWasteItem, submitWasteCollection } = useWaste();
  
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    condition: '',
    weight: '',
    description: ''
  });
  
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (isEditing && editingId) {
      updateWasteItem(editingId, formData);
      setIsEditing(false);
      setEditingId(null);
    } else {
      addWasteItem(formData);
    }
    
    // Reset form
    setFormData({
      name: '',
      category: '',
      condition: '',
      weight: '',
      description: ''
    });
  };
  
  const handleEdit = (item) => {
    setFormData({
      name: item.name,
      category: item.category,
      condition: item.condition,
      weight: item.weight,
      description: item.description
    });
    
    setIsEditing(true);
    setEditingId(item.id);
  };
  
  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditingId(null);
    
    setFormData({
      name: '',
      category: '',
      condition: '',
      weight: '',
      description: ''
    });
  };
  
  const handleSubmitCollection = async () => {
    if (wasteItems.length === 0) return;
    
    setIsSubmitting(true);
    
    try {
      const result = await submitWasteCollection();
      if (result.success) {
        setSubmissionSuccess(true);
        
        // Reset after 5 seconds
        setTimeout(() => {
          setSubmissionSuccess(false);
        }, 5000);
      }
    } catch (error) {
      console.error('Error submitting collection:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <DashboardSection>
      <Container>
        <DashboardHeader>
          <DashboardTitle>Welcome, {currentUser.name}</DashboardTitle>
          <DashboardSubtitle>
            Manage your e-waste collection requests from your personal dashboard.
          </DashboardSubtitle>
        </DashboardHeader>
        
        {submissionSuccess && (
          <SuccessMessage>
            <FiPlus style={{ transform: 'rotate(45deg)' }} />
            Your collection request has been submitted successfully! We'll contact you shortly to arrange pickup.
          </SuccessMessage>
        )}
        
        <DashboardContent>
          <FormSection>
            <FormTitle>{isEditing ? 'Edit Waste Item' : 'Add Waste Item'}</FormTitle>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label htmlFor="name">Item Name</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g., Laptop, Smartphone, Printer"
                  required
                />
              </FormGroup>
              
              <FormRow>
                <FormGroup>
                  <Label htmlFor="category">Category</Label>
                  <Select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a category</option>
                    <option value="Computers">Computers</option>
                    <option value="Mobile Devices">Mobile Devices</option>
                    <option value="Office Equipment">Office Equipment</option>
                    <option value="Accessories">Accessories</option>
                    <option value="TV/Monitors">TV/Monitors</option>
                    <option value="Other">Other</option>
                  </Select>
                </FormGroup>
                
                <FormGroup>
                  <Label htmlFor="condition">Condition</Label>
                  <Select
                    id="condition"
                    name="condition"
                    value={formData.condition}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select condition</option>
                    <option value="Working">Working</option>
                    <option value="Partially Working">Partially Working</option>
                    <option value="Not Working">Not Working</option>
                    <option value="Damaged">Damaged</option>
                  </Select>
                </FormGroup>
              </FormRow>
              
              <FormGroup>
                <Label htmlFor="weight">Approximate Weight (kg)</Label>
                <Input
                  type="number"
                  id="weight"
                  name="weight"
                  value={formData.weight}
                  onChange={handleChange}
                  placeholder="e.g., 2.5"
                  step="0.1"
                  min="0"
                />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Provide any additional details about the item..."
                  rows="4"
                />
              </FormGroup>
              
              <div style={{ display: 'flex', gap: 'var(--space-md)' }}>
                <PrimaryButton type="submit">
                  {isEditing ? 'Update Item' : 'Add Item'}
                </PrimaryButton>
                
                {isEditing && (
                  <OutlineButton type="button" onClick={handleCancelEdit}>
                    Cancel
                  </OutlineButton>
                )}
              </div>
            </Form>
          </FormSection>
          
          <div>
            <h2>Your Waste Items</h2>
            <ItemsList>
              {wasteItems.length === 0 ? (
                <NoItems>
                  <p>You haven't added any waste items yet.</p>
                  <p>Add your first item using the form on the left.</p>
                </NoItems>
              ) : (
                wasteItems.map((item) => (
                  <WasteCard key={item.id}>
                    <div className="card-header">
                      <div>
                        <div className="card-title">{item.name}</div>
                        <span className="card-category">{item.category}</span>
                      </div>
                      <div style={{ display: 'flex', gap: 'var(--space-sm)' }}>
                        <TextButton onClick={() => handleEdit(item)}>
                          <FiEdit2 size={16} />
                        </TextButton>
                        <TextButton onClick={() => deleteWasteItem(item.id)}>
                          <FiTrash2 size={16} />
                        </TextButton>
                      </div>
                    </div>
                    
                    <p className="card-description">{item.description || 'No description provided.'}</p>
                    
                    <div className="card-details">
                      <div className="detail-item">
                        <span className="detail-label">Condition</span>
                        <span className="detail-value">{item.condition}</span>
                      </div>
                      
                      <div className="detail-item">
                        <span className="detail-label">Weight</span>
                        <span className="detail-value">{item.weight ? `${item.weight} kg` : 'N/A'}</span>
                      </div>
                    </div>
                  </WasteCard>
                ))
              )}
            </ItemsList>
          </div>
        </DashboardContent>
        
        {wasteItems.length > 0 && (
          <SubmitSection>
            <h3>Ready to Submit Your Collection Request?</h3>
            <p>
              Once submitted, our team will contact you to arrange a convenient pickup time for your items.
            </p>
            <PrimaryButton 
              onClick={handleSubmitCollection} 
              disabled={isSubmitting}
              style={{ padding: 'var(--space-md) var(--space-xxl)' }}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Collection Request'}
            </PrimaryButton>
          </SubmitSection>
        )}
      </Container>
    </DashboardSection>
  );
};

export default Dashboard;